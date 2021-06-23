import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './add-client/add-client.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { EditProductsComponent } from './editproduct/editproduct.component';
import { ProductDetailsComponent } from './productdetails/productdetails.component';
import { RventeComponent } from './rvente.component';
const routes: Routes = [
  {path:'',component:RventeComponent,
 children:[
   {path:'',loadChildren:()=>import('./accueil/accueil.module').then(m=>m.AccueilModule)},
   {path:'vente/Devis',loadChildren:()=>import('./devis/devis.module').then(m=>m.DevisModule)},
   {path:'vente/Bonsortie',loadChildren:()=>import('./bon-sortie/bon-sortie.module').then(m=>m.BonSortieModule)},
   {path:'vente/CommandeCl',loadChildren:()=>import('./commande-client/commande-client.module').then(m=>m.CommandeClientModule)},
   {path:'vente/Bonlivraison',loadChildren:()=>import('./bon-livraison/bon-livraison.module').then(m=>m.BonLivraisonModule)},
   {path:'vente/Facture',loadChildren:()=>import('./facture/facture.module').then(m=>m.FactureModule)},
   {path:'Products',loadChildren:()=>import('./products/products.module').then(m=>m.ProductsModule)},
   {path:'Products/Addproduct',component:AddproductComponent},
   {path:'Products/Editproduct/:id',component:EditProductsComponent},
   {path:'Products/ProductDetails/:id',component:ProductDetailsComponent},
   {path:'Clients',loadChildren:()=>import('./clients/clients.module').then(m=>m.ClientsModule)},
   {path:'Clients/Addclient',component:AddClientComponent},
   {path:'Clients/clientDetails/:id',component:ClientDetailsComponent},
   {path:'Clients/Editclient/:id',component:EditClientComponent},
   {path:'RespCompte',loadChildren:()=>import('./rescompte/rescompte.module').then(m=>m.RescompteModule)},
   {path:'vente/Bonlivraison/Addbonl',loadChildren:()=>import('./addbonl/addbonl.module').then(m=>m.AddbonlModule)},
   {path:'vente/Devis/Adddevis',loadChildren:()=>import('./adddevis/adddevis.module').then(m=>m.AdddevisModule)},
   {path:'vente/Bonsortie/Addbons',loadChildren:()=>import('./add-bons/add-bons.module').then(m=>m.AddBonsModule)},
   {path:'vente/CommandeCl/Addcomm',loadChildren:()=>import('./add-comm/add-comm.module').then(m=>m.AddCommModule)},
   {path:'vente/Facture/Addfact',loadChildren:()=>import('./add-fact/add-fact.module').then(m=>m.AddFactModule)},
 ]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RventeRoutingModule { }




