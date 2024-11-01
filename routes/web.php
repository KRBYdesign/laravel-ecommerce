<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('home');
})->name('home');

Route::get('/shop/{gender}/{category?}', [\App\Http\Controllers\ShopPageController::class, 'shop'])->name('shop');

Route::get('/members', function () {
    return view('members');
})->middleware(['auth', 'verified'])->name('members');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::fallback(function () {
    return view('404');
});

require __DIR__.'/auth.php';
