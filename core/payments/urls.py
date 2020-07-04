from django.urls import path
from cart.views import final_cart
from .views import checkout


urlpatterns = [
    path('payments/<str:token>', checkout, name= 'payment')
]