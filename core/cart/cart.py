from decimal import Decimal
from .models import MyCart
from django.contrib.auth.models import User
from products.models import Product
from ast import literal_eval

def create_cart(user_name):
    customer = User.objects.get(username = user_name)
    cart = MyCart.objects.create(user = customer)
    cart.quan_data = "{}"
    cart.save()


def add_to_cart(request, user_name, product_id, quan):
    customer = User.objects.get(username = user_name)
    cart = MyCart.objects.get(user = customer)
    to_add   = Product.objects.get(id = product_id)
    cart.products.add(to_add)
    quan_dict = literal_eval(cart.qaun_data)
    quan_dict[product_id] = quan

def remove_from_cart(request, user_name, product_id):
    customer = User.objects.get(username = user_name)
    cart = MyCart.objects.get(user = customer)
    to_remove = Product.objects.get(id = product_id)
    cart.products.remove(to_remove)

def get_total(request, user_name):
    customer = User.objects.get(username = user_name)
    cart = MyCart.objects.get(user = customer)
    all_items = cart.products.all()
    total = 0 
    for item in all_items:
        total += item.price
    cart.total = total
    cart.save()

def get_all_items(user_name):
    customer = User.objects.get(username = user_name)
    cart = MyCart.objects.get(user = customer)
    all_items = cart.products.all()