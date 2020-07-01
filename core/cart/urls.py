from django.urls import path
from .cart import create_cart , add_to_cart , remove_from_cart, get_total


urlpatterns = [
	path('user/<str:token>', create_cart),
	path('add/<str:token>/<int:product_id>', add_to_cart),
	path('remove/<str:token>/<int:product_id>', remove_from_cart),
	path('total/<str:token>/', get_total),
	# path('<pk>', ProductDetailView.as_view()),
]

	# path('add/<str:token>/<int:product_id>/<int:quan>', add_to_cart),