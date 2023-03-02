from django.shortcuts import render
from django.conf import settings
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
# from rest_framework.decorators import api_view, permission_classes
# from rest_framework.permissions import IsAuthenticated
# from rest_framework_api_key.permissions import HasAPIKey
from .models import Mosaic
from .serializers import MosaicSerializer
import os
import glob
from .process_image.detect_face import DetectFace
import cv2
import numpy as np
import base64
from io import BytesIO
from PIL import Image
import base64


@api_view(["POST"]) #GETとPOSTメソッドを受け付ける
# @permission_classes([HasAPIKey|IsAuthenticated])
def mosaic_upload(request):
  if request.method == "POST":
    serializer = MosaicSerializer(data=request.data)
    if serializer.is_valid():
      updata = serializer.validated_data['image']
      up_path = 'media/images/image.jpg'
      result_path = '0123'
      f = open(up_path,'wb+') # 3
      for chunk in updata.chunks(): # 4
        f.write(chunk) # 5
      f.close() # 6
      org_path = '/media/images/image.jpg'
      #----モザイク化----#
      strength = serializer.validated_data['strength']
      rect_number = serializer.validated_data['rect_number']
      mosaic_type = serializer.validated_data['mosaic_type']
      detect_test = DetectFace(str(settings.BASE_DIR), org_path, result_path, float(strength), rect_number) #モザイククラスのインスタンス作成
      detect_test.detect_face() #顔検知メソッドを実行
      detect_write = detect_test.write_rectangle() #検知した顔の領域を表示するメソッドを実行
      detect_write = detect_test.write_rect_and_number() #検知した顔に番号を表示するメソッドを実行
      if int(mosaic_type) == 0:
        detect_stamp = detect_test.mosaic_face() #検知した顔にモザイクを表示するメソッドを実行
      elif int(mosaic_type) == 1:
        detect_stamp = detect_test.blur_face() #検知した顔にぼかしを表示するメソッドを実行
      else:
        if int(mosaic_type) == 2:
          detect_stamp = detect_test.stamp_face("smile") #検知した顔にスタンプを表示するメソッドを実行
        elif int(mosaic_type) == 3:
          detect_stamp = detect_test.stamp_face("star") #検知した顔にスタンプを表示するメソッドを実行
        elif int(mosaic_type) == 4:
          detect_stamp = detect_test.stamp_face("heart") #検知した顔にスタンプを表示するメソッドを実行
      rectangle = "media/rectangles/" + str(result_path) + "rect_number.jpg" #結果画像のurlをDBに登録
      result = "media/results/" + str(result_path) + "result.jpg" #結果画像のurlをDBに登録
      with open(result, mode='rb') as f:
        image_file = f.read()
      os.remove(rectangle)
      os.remove(up_path)
      os.remove(result)
      encoded_data = base64.b64encode(image_file)
      files = {}
      mine_type = "image/jpeg"
      file_name = "image.jpg"
      files = {'image': (file_name, encoded_data, mine_type)}
      return Response(files, status.HTTP_201_CREATED)
    return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)


@api_view(["POST"]) #GETとPOSTメソッドを受け付ける
# @permission_classes([HasAPIKey|IsAuthenticated])
def mosaic_rectangle(request):
  if request.method == "POST":
    serializer = MosaicSerializer(data=request.data)
    if serializer.is_valid():
      updata = serializer.validated_data['image']
      up_path = 'media/images/image.jpg'
      result_path = '0123'
      f = open(up_path,'wb+') # 3
      for chunk in updata.chunks(): # 4
        f.write(chunk) # 5
      f.close() # 6
      org_path = '/media/images/image.jpg'
      detect_test = DetectFace(database_path=str(settings.BASE_DIR), image_file=org_path, result_path=result_path, filter_size=1) #モザイククラスのインスタンス作成
      detect_test.detect_face() #顔検知メソッドを実行
      detect_write = detect_test.write_rectangle() #検知した顔の領域を表示するメソッドを実行
      active_number = detect_test.write_rect_and_number() #検知した顔の領域を表示するメソッドを実行
      rectangle = "media/rectangles/" + str(result_path) + "rect_number.jpg" #結果画像のurlをDBに登録
      result = "media/results/rect_image.jpg" #結果画像のurlをDBに登録
      max_strength = str(detect_test.calc_max_filter_size()) #フィルターサイズの最大値を計算
      with open(rectangle, mode='rb') as f:
        image_file = f.read()
      os.remove(rectangle)
      os.remove(up_path)
      os.remove(result)
      encoded_data = base64.b64encode(image_file)
      files = {}
      mine_type = "image/jpeg"
      file_name = "image.jpg"
      files = {'image': (file_name, encoded_data, mine_type), 'active_number': (active_number, 'application/json'), 'max_strength':(max_strength, 'application/json')}
      return Response(files, status.HTTP_201_CREATED)
    return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)

# Create your views here.
