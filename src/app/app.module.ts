import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ServerComponent } from './server/server.component';
import { FatherComponent } from './father/father.component';
import { SonComponent } from './son/son.component';
import { MyDirectDirective } from './my-direct.directive';
import { AliceComponent } from './brother/alice/alice.component';
import { BobComponent } from './brother/bob/bob.component';
import { TestRouterComponent } from './test-router/test-router.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MyFormComponent } from './form/my-form/my-form.component';
import { ReactiveFormComponent } from './form/reactive-form/reactive-form.component';
import { TestPipeComponent } from './pipe/test-pipe/test-pipe.component';
import { SummaryPipePipe } from './pipe/summary-pipe.pipe';
import { PersonComponent } from './components/person/person.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { NavigationComponent } from './pages/navigation/navigation.component';
import { QueryParamComponent } from './pages/query-param/query-param.component';
import { PathVarComponent } from './pages/path-var/path-var.component';
import { HistoryComponent } from './pages/history/history.component';
import { IntroduceComponent } from './pages/introduce/introduce.component';
import { TestLeaveComponent } from './guards/test-leave/test-leave.component';
import { TestResolverComponent } from './guards/test-resolver/test-resolver.component';
import { TestRxjsComponent } from './rxjs/test-rxjs/test-rxjs.component';
import { TestHttpComponent } from './http/test-http/test-http.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AuthInterceptor } from "./auth.interceptor";
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TestNgrxComponent } from './ngrx/test-ngrx/test-ngrx.component';
import { environment } from "../environments/environment";
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './store/effects/counter.effects';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TestAnimationComponent } from './anime/test-animation/test-animation.component';

@NgModule({
    declarations: [
        AppComponent,
        ServerComponent,
        FatherComponent,
        SonComponent,
        MyDirectDirective,
        AliceComponent,
        BobComponent,
        TestRouterComponent,
        NotFoundComponent,
        MyFormComponent,
        ReactiveFormComponent,
        TestPipeComponent,
        SummaryPipePipe,
        PersonComponent,
        HomeComponent,
        AboutComponent,
        LayoutComponent,
        NavigationComponent,
        QueryParamComponent,
        PathVarComponent,
        HistoryComponent,
        IntroduceComponent,
        TestLeaveComponent,
        TestResolverComponent,
        TestRxjsComponent,
        TestHttpComponent,
        TestNgrxComponent,
        TestAnimationComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot(reducers,{metaReducers}),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: !isDevMode(), // Restrict extension to log-only mode
            autoPause: true, // Pauses recording actions and state changes when the extension window is not open
            trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
            traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
        }),
        EffectsModule.forRoot([CounterEffects, ]),
        BrowserAnimationsModule
    ],
    providers: [
        // {
        //     provide: HTTP_INTERCEPTORS,
        //     useClass: AuthInterceptor,
        //     multi: true
        // }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
