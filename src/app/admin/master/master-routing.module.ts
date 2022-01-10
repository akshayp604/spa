import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasterComponent } from './master.component';

const routes: Routes = [{ path: '', component: MasterComponent, children:[
  { path: 'spa', loadChildren: () => import('./spa/spa.module').then(m => m.SpaModule), data:{title:'Spa'} },
   { path: 'room', loadChildren: () => import('./room/room.module').then(m => m.RoomModule), data:{title:'Room'} },
    { path: 'category', loadChildren: () => import('./category/category.module').then(m => m.CategoryModule), data:{title:'Category'} },
    { path: 'billing', loadChildren: () => import('./billing/billing.module').then(m => m.BillingModule) },
    { path: 'country', loadChildren: () => import('./countrymaster/countrymaster.module').then(m => m.CountrymasterModule) },
    { path: 'customer', loadChildren: () => import('./customermaster/customermaster.module').then(m => m.CustomermasterModule) },
    { path: 'discount', loadChildren: () => import('./discountmatser/discountmatser.module').then(m => m.DiscountmatserModule) },
    { path: 'employeeLeaves', loadChildren: () => import('./employee-leaves/employee-leaves.module').then(m => m.EmployeeLeavesModule) },
    { path: 'insentive', loadChildren: () => import('./insentive-master/insentive-master.module').then(m => m.InsentiveMasterModule) },
    { path: 'packageDetail', loadChildren: () => import('./package-detail/package-detail.module').then(m => m.PackageDetailModule) },
    { path: 'packageMaster', loadChildren: () => import('./package-master/package-master.module').then(m => m.PackageMasterModule) },
    { path: 'paymentMode', loadChildren: () => import('./payment-mode/payment-mode.module').then(m => m.PaymentModeModule) },
    { path: 'reservationDetail', loadChildren: () => import('./reservation-detail/reservation-detail.module').then(m => m.ReservationDetailModule) },
    { path: 'reservationmaster', loadChildren: () => import('./reservationmaster/reservationmaster.module').then(m => m.ReservationmasterModule) },
    { path: 'reservationStatus', loadChildren: () => import('./reservation-status/reservation-status.module').then(m => m.ReservationStatusModule) },
    { path: 'roomAvaliability', loadChildren: () => import('./room-avaliability/room-avaliability.module').then(m => m.RoomAvaliabilityModule) },
    { path: 'roomDetail', loadChildren: () => import('./room-detail/room-detail.module').then(m => m.RoomDetailModule) },
    { path: 'state', loadChildren: () => import('./state-master/state-master.module').then(m => m.StateMasterModule) },
    { path: 'therapistAvailability', loadChildren: () => import('./therapist-availability/therapist-availability.module').then(m => m.TherapistAvailabilityModule) },
    { path: 'therapist', loadChildren: () => import('./therapist-master/therapist-master.module').then(m => m.TherapistMasterModule) },
    { path: 'therapistSkills', loadChildren: () => import('./therapist-skills/therapist-skills.module').then(m => m.TherapistSkillsModule) },
    { path: 'therapyCategory', loadChildren: () => import('./therapy-category/therapy-category.module').then(m => m.TherapyCategoryModule) },
    { path: 'therapySubcategory', loadChildren: () => import('./therapy-subcategory/therapy-subcategory.module').then(m => m.TherapySubcategoryModule) },
    { path: 'timeSlot', loadChildren: () => import('./time-slot/time-slot.module').then(m => m.TimeSlotModule) },
    { path: 'treatmentStatus', loadChildren: () => import('./treatment-status/treatment-status.module').then(m => m.TreatmentStatusModule) },
    { path: 'userEmployee', loadChildren: () => import('./user-employee/user-employee.module').then(m => m.UserEmployeeModule) },
    { path: 'employee-type', loadChildren: () => import('./employee-type/employee-type.module').then(m => m.EmployeeTypeModule) },
    { path: 'therapySubCategoryDetail', loadChildren: () => import('./therapy-sub-category-detail/therapy-sub-category-detail.module').then(m => m.TherapySubCategoryDetailModule) },
] },
 
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
