<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class AdminController extends Controller
{
    public function dashboard()
    {
        return Inertia::render('Dashboard');
    }

    public function profile()
    {
        return Inertia::render('Profile');
    }

    public function settings()
    {
        return Inertia::render('Settings');
    }
}

