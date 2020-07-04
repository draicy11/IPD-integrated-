from django.urls import path
from cart.views import final_cart
from .views import checkout, charge, success
from cart.views import logout_user



urlpatterns = [
    path('payments/<str:user_token>', checkout, name= 'payment'),
    path('payments/<str:user_token>/charge', charge, name='charge'),
    path('payments/<str:user_token>/success', success, name='success'),
    path('logout', logout_user, name='logout' )
    
]