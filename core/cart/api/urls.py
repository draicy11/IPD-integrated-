from django.urls import path, include
from .views import MyCartDetailView


urlpatterns = [
	path('<str:token>', MyCartDetailView),

]
