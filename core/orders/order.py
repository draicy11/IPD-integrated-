from cart.cart import get_user_cart
from .models import MyOrder
from django.contrib.auth.models import User


def create_order(token):
    cart = get_user_cart(token)
    user = User.objects.get(auth_token = token)
    order = MyOrder.objects.create(user = user)
    to_add = cart.products.all()
    for a in to_add:
        order.products.add(a)
    order.size_data = cart.size_data
    order.quan_data = cart.quan_data
    order.total = cart.total
    order.save()