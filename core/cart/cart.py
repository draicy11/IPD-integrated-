from decimal import Decimal
from .models import MyCart
from django.contrib.auth.models import User
from products.models import Product
from ast import literal_eval

def create_cart(request,token):
    user=User.objects.get(auth_token=token)
    customer = User.objects.get(username = user)
    checker = list(MyCart.objects.filter(user = customer))
    if len(checker) != 0 :
        pass
    else:
        cart = MyCart.objects.create(user = customer)
        cart.quan_data = "{}"
        cart.save()
def add_to_cart(request, token, product_id, quan):
    user=User.objects.get(auth_token=token)
    customer = User.objects.get(username = user)
    cart = MyCart.objects.get(user = customer)
    to_add   = Product.objects.get(id = product_id)
    checker = list(cart.products.filter(id = to_add.id))
    if len(checker) != 0:
        quan_dict = literal_eval(cart.quan_data)
        name = to_add.name
        orgnl_quan = quan_dict[name]
        new_quan = orgnl_quan + quan
        quan_dict[name] = new_quan
        quan_str = str(quan_dict)
        cart.quan_data = quan_str
        cart.save()
    else:
        cart.products.add(to_add)
        quan_dict = literal_eval(cart.quan_data)
        name = to_add.name
        quan_dict[name] = quan
        quan_str = str(quan_dict)
        cart.quan_data = quan_str
        cart.save()
    get_total(token)

def remove_from_cart(request, token, product_id):
    user=User.objects.get(auth_token=token)
    customer = User.objects.get(username = user)
    cart = MyCart.objects.get(user = customer)
    to_remove = Product.objects.get(id = product_id)
    cart.products.remove(to_remove)

def get_total(token):
    user=User.objects.get(auth_token=token)
    customer = User.objects.get(username = user)
    cart = MyCart.objects.get(user = customer)
    all_items = cart.products.all()
    total = 0 
    for item in all_items:
        total += item.price
    cart.total = total
    cart.save()

def get_all_items(token):
    user=User.objects.get(auth_token=token)
    customer = User.objects.get(username = user)
    cart = MyCart.objects.get(user = customer)
    all_items = cart.products.all()