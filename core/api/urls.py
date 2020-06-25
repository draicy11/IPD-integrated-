from django.urls import path, include
from . import views

urlpatterns = [

		path('', views.apiOverview, name="api-overview"),
		path('product-list/', views.productList, name="product-list"),
		path('product-create/', views.productCreate, name="product-create"),			#C
		path('product-detail/<str:pk>/', views.productDetail, name="product-detail"),	#R
		path('product-update/<str:pk>/', views.productUpdate, name="product-update"),	#U
		path('product-delete/<str:pk>/', views.productDelete, name="product-delete"),	#D
		
]