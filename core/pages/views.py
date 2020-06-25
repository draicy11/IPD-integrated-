from django.shortcuts import render
from django.views.generic import ListView, TemplateView
from products.models import Product
from django.contrib.auth.models import User

class HomePageView(ListView):
    template_name = 'home.html'
    model = Product
    context_object_name = 'item'
    User.username ='user'

class ContactPageView(TemplateView):
    template_name = 'contact.html'

class AboutPageView(TemplateView):
    template_name = 'about.html'