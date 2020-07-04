from django.shortcuts import render
from cart.cart import get_user_cart
import stripe

stripe.api_key = 'sk_test_51H13KKBn1VxTvGlYZbmhbBxfjVXA2mjb0EtYtZhf7NWmjvlbsC3jLNyvdVk5W6hKSps7s5Hrh0ShiuihAN5j2qmS004QLBalKv'

def checkout(request, token):
    cart = get_user_cart(token)
    total = int(cart.total)

    intent = stripe.PaymentIntent.create(
    amount=total,
    currency='inr',
    payment_method_types = ['card'],
    # Verify your integration in this guide by including this parameter
    metadata={'integration_check': 'accept_a_payment'},
    )
    context = {
        'client_secret' : intent.client_secret,

    } 

    return render(request , 'checkout.html' , context)
