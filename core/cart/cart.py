from decimal import Decimal
from .models import MyCart
from django.contrib.auth.models import User
from products.models import Product

def create_cart(user_name):
    customer = User.objects.get(username = user_name)
    cart = MyCart.objects.create(user = customer)


def add_to_cart(request, user_name, product_id):
    customer = User.objects.get(username = user_name)
    cart = MyCart.objects.get(user = customer)
    to_add   = Product.objects.get(id = product_id)
    cart.products.add(to_add)

def remove_from_cart(request, user_name, product_id):
    customer = User.objects.get(username = user_name)
    cart = MyCart.objects.get(user = customer)
    to_remove = Product.objects.get(id = product_id)
    cart.products.remove(to_remove)

def get_total(request, user_name):
    customer = User.objects.get(username = user_name)
    cart = MyCart.objects.get(user = customer)
    all_items = list(cart.products.all())
    total = 0 
    for l1 in range(len(all_items)):
        total += all_items[l1].price 
    cart.total = total

def get_all_items(user_name):
    customer = User.objects.get(username = user_name)
    cart = MyCart.objects.get(user = customer)
    all_items = cart.products.all()