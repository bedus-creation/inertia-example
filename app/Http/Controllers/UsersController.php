<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;

class UsersController extends Controller
{
    public function index()
    {
        return inertia('Users/Index', [
            'users' => new User([
                'email' => 'tmgbedu@gmail.com'
            ])
        ]);
    }

    public function create()
    {
        return Inertia::basePageUrl('/users')
            ->dialog('Users/Create', [
                'roles' => ['Admin', 'User']
            ]);
    }

    public function store()
    {
        return redirect()->back();
    }
}
