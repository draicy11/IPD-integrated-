from django.urls import path
from .views import sign_in_backend, logout_user

urlpatterns = [
    path('login/<str:user_name>', sign_in_backend, name = 'sign-in' ),
    path('logout', logout_user, name='logout' ),
]