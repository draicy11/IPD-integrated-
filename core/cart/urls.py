from django.urls import path
from .cart import create_cart , add_to_cart , remove_from_cart, get_total
from .views import final_cart


urlpatterns = [
	path('user/<str:token>', create_cart),
	path('add/<str:token>/<int:product_id>', add_to_cart),
	path('remove/<str:token>/<int:product_id>', remove_from_cart, name= 'remove-cart'),
	path('add/<str:token>/<int:product_id>/<int:quan>/<str:size>', add_to_cart),
	path('user/<str:token>/details', final_cart),
]

	