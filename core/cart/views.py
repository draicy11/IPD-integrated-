from django.shortcuts import render
from django.views import generic
from .models import MyCart
from .cart import get_user_cart, get_total
from ast import literal_eval
from django.contrib.auth.models import User



def final_cart(request, token):
    cart = get_user_cart(token)
    items = cart.products.all()
    total = cart.total
    if total == 0.00:
        return render(request, 'no.html')
    size_dict = literal_eval(cart.size_data)
    quan_dict = literal_eval(cart.quan_data)
    context = {
        'items'    : items,
        'total'    : total,
        'quantity' : quan_dict,
        'size'     : size_dict,
        'token'    : token
    }
    return render(request, 'cart-detail.html', context)


