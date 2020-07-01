from django.urls import path
from .cart import create_cart , add_to_cart


urlpatterns = [
	path('user/<str:user_name>', create_cart),
	path('add/<str:user_name>/<int:product_id>', add_to_cart),
	path('add/<str:user_name>/<int:product_id>', add_to_cart),
	# path('<pk>', ProductDetailView.as_view()),
]
