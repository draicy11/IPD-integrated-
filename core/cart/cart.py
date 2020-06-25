from products.models import Product
from .models import MyCart
from django.shortcuts import get_object_or_404, render, redirect
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from ast import literal_eval

@login_required
def item_add(self, pk, userid):
    to_add = get_object_or_404(Product, id = pk)
    buyer = User.objects.get(username= userid)
    a = len(list(MyCart.objects.filter(user = buyer)))
    if a == 0 : #makes a cart
        cart_item = MyCart.objects.create(user = buyer)
        cart_item.save()
        cart_item.products.add(to_add)
        return render('success')
    else: #adds a cart
        b = MyCart.objects.get(user = buyer)
        b.products.add(to_add)
        return redirect('success')

def fetch_cart_items(userid):
    buyer = User.objects.get(username= userid)
    a = len(list(MyCart.objects.filter(user = buyer)))
    if a == 0:
        MyCart.objects.create(user = buyer)
        cart = MyCart.objects.get(user = buyer)
        items = cart.products.all()
        return items
    else:
        cart = MyCart.objects.get(user = buyer)
        items = cart.products.all()
        return items

def item_remove(userid, id):
    toremove = get_object_or_404(Product, id = id)
    user = User.objects.get(username=userid)
    cart = MyCart.objects.get(user = user)
    cart.products.remove(toremove)

def total_calc(userid):
    user = User.objects.get(username=userid)
    cart = MyCart.objects.get(user = user)
    prods = cart.products.all()
    total = 0
    for item in prods:
        total = total + item.price
    return total
