from django.urls import path
from .views import AllShoeView, AllTopsView, AllJeansView, DetailProductView, SuccessShow
from cart.cart import item_add, fetch_cart_items
from cart.views import final_cart_view, remove_item


urlpatterns = [
    path('shoes/', AllShoeView.as_view(), name='all-shoes'),
    path('tops/', AllTopsView.as_view(), name='all-tops'),
    path('jeans/', AllJeansView.as_view(), name='all-jeans'),
    path('product/<int:pk>', DetailProductView.as_view(), name='product-detail'),
    path('cart/<int:pk>/<str:userid>', item_add, name='add-cart'),
    path('cart/<str:userid>/checkout', final_cart_view , name='cart' ),
    path('cart/success', SuccessShow.as_view(),name='success'),
    path('cart/remove/<str:userid>/<int:id>', remove_item, name='remove-item' ),
]