<?php

namespace App\Providers;

use Illuminate\Http\Request;
use Illuminate\Routing\Route;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $inertiaProps  =  new class
        {
            public $parentUrl;

            public function setParentUrl(string $url)
            {
                $this->parentUrl = $url;
            }
        };

        Inertia::macro('dialog', function ($component, $props) use ($inertiaProps) {
            $parentRequest = Request::create($inertiaProps->parentUrl, 'GET', []);
            $routeCollection = \Illuminate\Support\Facades\Route::getRoutes();
            $parentResponse = $routeCollection->match($parentRequest)->run();

            /** @parentReponse \Inertia\Response */
            return $parentResponse->with([
                'modal' => $component,
                'dialogProps' => $props,
            ])->toResponse(request());
        });

        Inertia::macro('basePageUrl', function ($url) use ($inertiaProps) {
            $inertiaProps->setParentUrl($url);
            return $this;
        });
    }
}
