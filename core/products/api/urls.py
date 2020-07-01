from django.urls import path, include
from .views import ProductListView, ProductDetailView
from cart.cart import create_cart


urlpatterns = [
	path('', ProductListView.as_view()),
	path('<int:pk>', ProductDetailView.as_view()),
	path('user/<str:username1>', create_cart),

]
