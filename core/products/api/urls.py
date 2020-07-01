from django.urls import path, include
from .views import ProductListView, ProductDetailView


urlpatterns = [
	path('', ProductListView.as_view()),
	path('<pk>', ProductDetailView.as_view()),
]
