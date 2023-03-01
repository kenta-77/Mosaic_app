from django.shortcuts import render
from django.conf import settings
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
# from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated
from rest_framework_api_key.permissions import HasAPIKey
from .models import Mosaic
from .serializers import MosaicSerializer
import os
import glob
from .process_image.detect_face import DetectFace


@api_view(["GET","POST"]) #GETとPOSTメソッドを受け付ける
@permission_classes([HasAPIKey|IsAuthenticated])
def mosaic_upload(request):
  if request.method == "GET":
    mosaic = Mosaic.objects.latest('id')
    serializer = MosaicSerializer(mosaic)
    return Response(serializer.data)
  elif request.method == "POST":
    serializer = MosaicSerializer(data=request.data)
    if serializer.is_valid():
      if len(Mosaic.objects.all()) < 1:
        serializer.save() #postデータをDBに登録
      else:
        for p in glob.glob('./media/images/*',recursive=True):
          if os.path.isfile(p):
            os.remove(p)
        for i in glob.glob('./media/results/*',recursive=True):
          if os.path.isfile(i):
            os.remove(i)
        for j in glob.glob('./media/rectangles/*',recursive=True):
          if os.path.isfile(j):
            os.remove(j)
        Mosaic.objects.all().delete()
        serializer.save() #postデータをDBに登録
      #----モザイク化----#
      mosaic = Mosaic.objects.get(id=serializer.data["id"]) #送信された画像を取得
      org_path = mosaic.image.url #送信された画像のurlを取得
      result_path = mosaic.id #送信された画像のidを取得し、処理画像のurlとして使用
      detect_test = DetectFace(str(settings.BASE_DIR), org_path, result_path, float(mosaic.strength), mosaic.rect_number) #モザイククラスのインスタンス作成
      detect_test.detect_face() #顔検知メソッドを実行
      detect_write = detect_test.write_rectangle() #検知した顔の領域を表示するメソッドを実行
      detect_write = detect_test.write_rect_and_number() #検知した顔に番号を表示するメソッドを実行
      if int(mosaic.mosaic_type) == 0:
        detect_stamp = detect_test.mosaic_face() #検知した顔にモザイクを表示するメソッドを実行
      elif int(mosaic.mosaic_type) == 1:
        detect_stamp = detect_test.blur_face() #検知した顔にぼかしを表示するメソッドを実行
      else:
        if int(mosaic.mosaic_type) == 2:
          detect_stamp = detect_test.stamp_face("smile") #検知した顔にスタンプを表示するメソッドを実行
        elif int(mosaic.mosaic_type) == 3:
          detect_stamp = detect_test.stamp_face("star") #検知した顔にスタンプを表示するメソッドを実行
        elif int(mosaic.mosaic_type) == 4:
          detect_stamp = detect_test.stamp_face("heart") #検知した顔にスタンプを表示するメソッドを実行
      mosaic.result = "results/" + str(result_path) + "result.jpg" #結果画像のurlをDBに登録
      mosaic.rectangle = "rectangles/" + str(result_path) + "rect_number.jpg" #結果画像のurlをDBに登録
      mosaic.save() #変更内容を登録
      serializer = MosaicSerializer(mosaic) #データをシリアライズ
      return Response(serializer.data, status.HTTP_201_CREATED)
    return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)


@api_view(["POST"]) #GETとPOSTメソッドを受け付ける
@permission_classes([HasAPIKey|IsAuthenticated])
def mosaic_rectangle(request):
  if request.method == "POST":
    serializer = MosaicSerializer(data=request.data)
    if serializer.is_valid():
      if len(Mosaic.objects.all()) < 1:
        serializer.save() #postデータをDBに登録
      else:
        for p in glob.glob('./media/images/*',recursive=True):
          if os.path.isfile(p):
            os.remove(p)
        for i in glob.glob('./media/results/*',recursive=True):
          if os.path.isfile(i):
            os.remove(i)
        for j in glob.glob('./media/rectangles/*',recursive=True):
          if os.path.isfile(j):
            os.remove(j)
        Mosaic.objects.all().delete()
        serializer.save() #postデータをDBに登録
      #----モザイク化----#
      mosaic = Mosaic.objects.get(id=serializer.data["id"]) #送信された画像を取得
      org_path = mosaic.image.url #送信された画像のurlを取得
      result_path = mosaic.id #送信された画像のidを取得し、処理画像のurlとして使用
      detect_test = DetectFace(str(settings.BASE_DIR), org_path, result_path, float(mosaic.strength)) #モザイククラスのインスタンス作成
      detect_test.detect_face() #顔検知メソッドを実行
      detect_write = detect_test.write_rectangle() #検知した顔の領域を表示するメソッドを実行
      mosaic.active_number = detect_test.write_rect_and_number() #検知した顔の領域を表示するメソッドを実行
      mosaic.rectangle = "rectangles/" + str(result_path) + "rect_number.jpg" #結果画像のurlをDBに登録
      mosaic.max_strength = str(detect_test.calc_max_filter_size()) #フィルターサイズの最大値を計算
      mosaic.save() #変更内容を登録
      serializer = MosaicSerializer(mosaic) #データをシリアライズ
      return Response(serializer.data, status.HTTP_201_CREATED)
    return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)

# Create your views here.
