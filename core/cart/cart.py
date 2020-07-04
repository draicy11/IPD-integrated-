from decimal import Decimal
from .models import MyCart
from django.contrib.auth.models import User
from products.models import Product
from ast import literal_eval
from django.http import HttpResponse

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
    return HttpResponse("Created Cart")
def add_to_cart(request, token, product_id, quan, size):
    cart = get_user_cart(token)
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
        size_dict = literal_eval(cart.size_data)
        size_dict[to_add.name] = size
        cart.size_data = str(size_dict)
        cart.save()
    else:
        cart.products.add(to_add)
        quan_dict = literal_eval(cart.quan_data)
        name = to_add.name
        quan_dict[name] = quan
        quan_str = str(quan_dict)
        cart.quan_data = quan_str
        cart.save()
        size_dict = literal_eval(cart.size_data)
        size_dict[to_add.name] = size
        cart.size_data = str(size_dict)
        cart.save()
    get_total(token)
    return HttpResponse("Item Added")

def remove_from_cart(request, token, product_id):
    cart = get_user_cart(token)
    to_remove = Product.objects.get(id = product_id)
    cart.products.remove(to_remove)
    size_dict = literal_eval(cart.size_data)
    quan_dict = literal_eval(cart.quan_data)
    size_dict.pop(to_remove.name)
    quan_dict.pop(to_remove.name)
    cart.size_data = str(size_dict)
    cart.quan_data = str(quan_dict)
    cart.save()
    get_total(token)
    return HttpResponse("Item Removed")

def get_total(token):
    cart= get_user_cart(token)
    all_items = cart.products.all()
    quan_dict = literal_eval(cart.quan_data)
    total = 0
    for item in all_items:
        total += (item.price)*(quan_dict[item.name])
    if total == 0:
        cart.total = 0.00
        cart.save()
    else:
        cart.total = total
        cart.save()
def get_user_cart(token):
    user=User.objects.get(auth_token=token)
    customer = User.objects.get(username = user)
    cart = MyCart.objects.get(user = customer)
    return cart