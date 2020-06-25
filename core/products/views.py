from django.shortcuts import render
from django.views import generic
from .models import Product
from django.contrib.auth.models import User
from cart.models import MyCart

# Create your views here.

class AllShoeView(generic.ListView):
    template_name = 'shoes.html'
    model = Product
    context_object_name = 'item'

class AllTopsView(generic.ListView):
    template_name = 'tops.html'
    model = Product
    context_object_name = 'item'

class AllJeansView(generic.ListView):
    template_name = 'jeans.html'
    model = Product
    context_object_name = 'item'

class DetailProductView(generic.DetailView):
    template_name = 'product-detail.html'
    model = Product
    context_object_name = 'item'
    User.username ='user'

class SuccessShow(generic.TemplateView):
    template_name = 'success.html'
    User.username = 'user'