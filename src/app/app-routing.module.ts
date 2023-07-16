import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestRouterComponent } from "./test-router/test-router.component";
import { ServerComponent } from "./server/server.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { PathVarComponent } from "./pages/path-var/path-var.component";
import { QueryParamComponent } from "./pages/query-param/query-param.component";
import { IntroduceComponent } from "./pages/introduce/introduce.component";
import { HistoryComponent } from "./pages/history/history.component";
import { UserModule } from "./user/user.module";
import { authGuard } from "./guards/auth.guard";
import { TestLeaveComponent } from "./guards/test-leave/test-leave.component";
import { leaveGuard } from "./guards/leave.guard";
import { TestResolverComponent } from "./guards/test-resolver/test-resolver.component";
import { getDataResolver } from "./guards/get-data.resolver";
import { TestRxjsComponent } from "./rxjs/test-rxjs/test-rxjs.component";
import { TestHttpComponent } from "./http/test-http/test-http.component";
import { TestNgrxComponent } from "./ngrx/test-ngrx/test-ngrx.component";

// const routes: Routes = [
//   {path:'router',component: TestRouterComponent },
//   {path:'',component:ServerComponent},
//   {path:'not-found',component:NotFoundComponent},
//   {path:'**',redirectTo: '/not-found'},
// ];

const routes: Routes = [
    { path: "home", component: HomeComponent },
    {
        path: "about", component: AboutComponent,
        children: [
            { path: 'introduce', component: IntroduceComponent },
            { path: 'history', component: HistoryComponent }
        ],
        canActivate: [authGuard]
    },
    { path: "pathVar/:id/:color", component: PathVarComponent },
    { path: "queryParam", component: QueryParamComponent },
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "user",
        loadChildren: () => import("./user/user.module").then(m => UserModule)
    },
    { path: "testLeave", component: TestLeaveComponent, canDeactivate: [leaveGuard] },
    {
        path: "testResolver", component: TestResolverComponent, resolve: {
            data: getDataResolver
        }
    },
    { path: "ngrx", component: TestNgrxComponent },
    { path: "rxjs", component: TestRxjsComponent },
    { path: "http", component: TestHttpComponent },
    { path: "**", component: NotFoundComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
