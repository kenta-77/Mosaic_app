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
from .process_image.detect_face import DetectFace
import base64
import gc


@api_view(["POST"]) #GETとPOSTメソッドを受け付ける
# @permission_classes([HasAPIKey|IsAuthenticated])
def mosaic_upload(request):
  if request.method == "POST":
    serializer = MosaicSerializer(data=request.data)
    if serializer.is_valid():
      updata = serializer.validated_data['image']
      up_path = './media/images/image.jpg'
      result_path = '0123'
      with open(up_path,'wb+') as f:# 3
        for chunk in updata.chunks(): # 4
          f.write(chunk) # 5
      org_path = '/media/images/image.jpg'
      #----モザイク化----#
      detect_test = DetectFace(str(settings.BASE_DIR), org_path, result_path, float(serializer.validated_data['strength']), serializer.validated_data['rect_number']) #モザイククラスのインスタンス作成
      detect_test.detect_face() #顔検知メソッドを実行
      # detect_test.write_rectangle() #検知した顔の領域を表示するメソッドを実行
      # detect_test.write_rect_and_number() #検知した顔に番号を表示するメソッドを実行
      if int(serializer.validated_data['mosaic_type']) == 0:
        detect_test.mosaic_face() #検知した顔にモザイクを表示するメソッドを実行
      elif int(serializer.validated_data['mosaic_type']) == 1:
        detect_test.blur_face() #検知した顔にぼかしを表示するメソッドを実行
      else:
        if int(serializer.validated_data['mosaic_type']) == 2:
          detect_test.stamp_face("smile") #検知した顔にスタンプを表示するメソッドを実行
        elif int(serializer.validated_data['mosaic_type']) == 3:
          detect_test.stamp_face("star") #検知した顔にスタンプを表示するメソッドを実行
        elif int(serializer.validated_data['mosaic_type']) == 4:
          detect_test.stamp_face("heart") #検知した顔にスタンプを表示するメソッドを実行
      rectangle = "./media/rectangles/" + str(result_path) + "rect_number.jpg" #結果画像のurlをDBに登録
      result = "./media/results/" + str(result_path) + "result.jpg" #結果画像のurlをDBに登録
      with open(result, mode='rb') as f:
        image_file = f.read()
      os.remove(rectangle)
      os.remove(up_path)
      os.remove(result)
      encoded_data = base64.b64encode(image_file)
      files = {}
      files = {'image': ("image.jpg", encoded_data, "image/jpeg")}
      gc.collect()
      return Response(files, status.HTTP_201_CREATED)
    return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)


@api_view(["POST"]) #GETとPOSTメソッドを受け付ける
# @permission_classes([HasAPIKey|IsAuthenticated])
def mosaic_rectangle(request):
  if request.method == "POST":
    serializer = MosaicSerializer(data=request.data)
    if serializer.is_valid():
      up_path = './media/images/image.jpg'
      with open(up_path,'wb+') as f: # 3
        for chunk in serializer.validated_data['image'].chunks(): # 4
          f.write(chunk) # 5
      org_path = '/media/images/image.jpg'
      detect_test = DetectFace(database_path=str(settings.BASE_DIR), image_file=org_path, result_path='0123', filter_size=1) #モザイククラスのインスタンス作成
      _, active_number, max_strength  = detect_test.detect_face_rectangle() #顔検知メソッドを実行
      rectangle = "./media/rectangles/" + '0123' + "rect_number.jpg" #結果画像のurlをDBに登録
      with open(rectangle, mode='rb') as f:
        image_file = f.read()
      # os.remove(rectangle)
      # os.remove(up_path)
      encoded_data = base64.b64encode(image_file)
      files = {}
      mine_type = "image/jpeg"
      file_name = "image.jpg"
      files = {'image': (file_name, encoded_data, mine_type), 'active_number': (active_number, 'application/json'), 'max_strength':(max_strength, 'application/json')}
      del detect_test
      del image_file
      return Response(files, status.HTTP_201_CREATED)
    return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)

# Create your views here.
