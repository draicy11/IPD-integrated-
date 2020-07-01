from decimal import Decimal
from .models import MyCart
from django.contrib.auth.models import User
from products.models import Product

def create_cart(request, user_name):
    customer = User.objects.get(username = user_name)
    cart = MyCart.objects.create(user = customer)


def add_to_cart(request, user_name, product_id):
    customer = User.objects.get(username = user_name)
    cart = MyCart.objects.get(user = customer)
    to_add   = Product.objects.get(id = product_id)
    cart.products.add(to_add)

