<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\View\View;

class ShopPageController extends Controller
{
    public function shop(string $gender, ?string $category = null)
    {
        if ($gender !== "men" && $gender !== "women" && $gender !== "all") {
            return view('404');
        }

        return view('shop', []);
    }
}
