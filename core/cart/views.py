from django.shortcuts import render, redirect
from.models import MyCart
from django.views import generic
from .cart import fetch_cart_items, item_remove, total_calc
from accounts.restrict import check_access
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
# Create your views here.
@login_required
def final_cart_view(request, userid):
    curr_user = request.user
    print(curr_user)
    check = check_access(userid, curr_user)
    if check == True:
        items = fetch_cart_items(userid)
        if len(list(items)) == 0:
            return render(request, 'empty-cart.html')
        else:
            total_amt = total_calc(userid)
            context = {
                'items' : items , 
                 'users':  curr_user.username,
                 'total': total_amt,
            }
            
            return render(request, 'cart.html', context)
    else:
        return render(request, 'no.html')
    
@login_required
def remove_item(request,userid,id):
    item_remove(userid, id)
    return redirect('home')

