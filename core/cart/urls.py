from django.urls import path
from .cart import create_cart , add_to_cart , remove_from_cart, get_total


urlpatterns = [
	path('user/<str:user_name>', create_cart),
	path('add/<str:user_name>/<int:product_id>/quan', add_to_cart),
	path('remove/<str:user_name>/<int:product_id>', remove_from_cart),
	path('total/<str:user_name>/', get_total),
	# path('<pk>', ProductDetailView.as_view()),
]