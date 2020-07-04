from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse
# Create your views here.

def sign_in_backend(request, user_name):
    curr_user = User.objects.get(username = user_name)
    username = curr_user.username
    password = curr_user.password
    user = authenticate(username=username , password = password)
    if user is not None:
        login(request, user)
    return HttpResponse("Logged In")
    
def logout_user(request):
    logout(request)
    return HttpResponse('Logged Out successfully')