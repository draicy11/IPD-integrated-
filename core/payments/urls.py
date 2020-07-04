from django.urls import path
from cart.views import final_cart


urlpatterns = [
    path('payments', final_cart)
]