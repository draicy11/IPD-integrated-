from django.shortcuts import render

from rest_framework.decorators import api_view
from rest_framework.response import Response
from api.serializers import ProductSerializer
from products.models import Product
# Create your views here.


@api_view(['GET'])
def apiOverview(request):

	apiUrls = {
		'list' : '/product-list/',
		'Detail View' : '/product-detail/<str:pk>/',
		'Create' : '/product-create/',
		'Delete' : '/product-delete/<str:pk>/',
		'Update' : '/product-update/<str:pk>/',
	}
	return Response(apiUrls)


@api_view(['GET'])
def productList(request):
	products = Product.objects.all()
	serializer = ProductSerializer(products, many=True)

	return Response(serializer.data)

@api_view(['GET'])
def productDetail(request, pk):
	product = Product.objects.get(id = pk)
	serializer = ProductSerializer(product, many=False)

	return Response(serializer.data)

@api_view(['POST'])
def productCreate(request):
	serializer = ProductSerializer(data = request.data)
	if serializer.is_valid():
		serializer.save()
		return Response('Created Sucessfully')

@api_view(['POST'])
def productUpdate(request, pk):
	product = Product.objects.get(id = pk)
	serializer = ProductSerializer(instance= product, data=request.data)

	if serializer.is_valid():
		serializer.save()
		return Response("Updated Sucessfully")

@api_view(['DELETE'])
def productDelete(request, pk):
	product = Product.objects.get(id=pk)
	product.delete()

	return Response("Deleted Sucessfully")