from django.shortcuts import render, redirect
import stripe
from cart.cart import get_user_cart, create_cart
from orders.order import create_order


stripe.api_key = "sk_test_51H13KKBn1VxTvGlYZbmhbBxfjVXA2mjb0EtYtZhf7NWmjvlbsC3jLNyvdVk5W6hKSps7s5Hrh0ShiuihAN5j2qmS004QLBalKv"


def checkout(request, user_token):
    context={
        'user_token' : user_token
    }
    return render(request , 'checkout.html', context)

def charge(request, user_token):
    cart = get_user_cart(user_token)
    total = int(cart.total)*100
    token = request.POST['stripeToken']
    customer = stripe.Customer.create(
        name = request.POST['name'],
        email= request.POST['email'],
        source=token,
    )
    charge = stripe.Charge.create(
    amount=total,
    currency='inr',
    description='Example charge',
    customer=customer,
    )
    return redirect('success', user_token )

def success(request, user_token):
    cart = get_user_cart(user_token)
    create_order(user_token)
    cart.delete()
    create_cart(request, user_token)
    return render(request, 'success.html')