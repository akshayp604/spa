import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasterComponent } from './master.component';

const routes: Routes = [{
  path: '', component: MasterComponent, children: [
    { path: 'spa', loadChildren: () => import('./spa/spa.module').then(m => m.SpaModule), data: { title: 'Spa' } },
    { path: 'room', loadChildren: () => import('./room/room.module').then(m => m.RoomModule), data: { title: 'Room' } },
    { path: 'category', loadChildren: () => import('./category/category.module').then(m => m.CategoryModule), data: { title: 'Category' } },
    { path: 'billing', loadChildren: () => import('./billing/billing.module').then(m => m.BillingModule), data: { title: 'Billing' } },
    { path: 'country', loadChildren: () => import('./countrymaster/countrymaster.module').then(m => m.CountrymasterModule), data: { title: 'Country' } },
    { path: 'customer', loadChildren: () => import('./customermaster/customermaster.module').then(m => m.CustomermasterModule), data: { title: 'Customer' } },
    { path: 'discount', loadChildren: () => import('./discountmatser/discountmatser.module').then(m => m.DiscountmatserModule), data: { title: 'Discount' } },
    { path: 'employeeLeaves', loadChildren: () => import('./employee-leaves/employee-leaves.module').then(m => m.EmployeeLeavesModule), data: { title: 'Employee' } },
    { path: 'insentive', loadChildren: () => import('./insentive-master/insentive-master.module').then(m => m.InsentiveMasterModule), data: { title: 'Incentive' } },
    { path: 'packageDetail', loadChildren: () => import('./package-detail/package-detail.module').then(m => m.PackageDetailModule), data: { title: 'Package-detail' } },
    { path: 'packageMaster', loadChildren: () => import('./package-master/package-master.module').then(m => m.PackageMasterModule), data: { title: 'Package-master' } },
    { path: 'paymentMode', loadChildren: () => import('./payment-mode/payment-mode.module').then(m => m.PaymentModeModule), data: { title: 'Payment' } },
    { path: 'reservationDetail', loadChildren: () => import('./reservation-detail/reservation-detail.module').then(m => m.ReservationDetailModule), data: { title: 'Reservation-detail' } },
    { path: 'reservationmaster', loadChildren: () => import('./reservationmaster/reservationmaster.module').then(m => m.ReservationmasterModule), data: { title: 'Reservation-master' } },
    { path: 'reservationStatus', loadChildren: () => import('./reservation-status/reservation-status.module').then(m => m.ReservationStatusModule), data: { title: 'Reservation-status' } },
    { path: 'roomAvaliability', loadChildren: () => import('./room-avaliability/room-avaliability.module').then(m => m.RoomAvaliabilityModule), data: { title: 'Room' } },
    { path: 'roomDetail', loadChildren: () => import('./room-detail/room-detail.module').then(m => m.RoomDetailModule), data: { title: 'Room-detail' } },
    { path: 'state', loadChildren: () => import('./state-master/state-master.module').then(m => m.StateMasterModule), data: { title: 'State' } },
    { path: 'therapistAvailability', loadChildren: () => import('./therapist-availability/therapist-availability.module').then(m => m.TherapistAvailabilityModule), data: { title: 'Therapy' } },
    { path: 'therapist', loadChildren: () => import('./therapist-master/therapist-master.module').then(m => m.TherapistMasterModule), data: { title: 'Therapy-master' } },
    { path: 'therapistSkills', loadChildren: () => import('./therapist-skills/therapist-skills.module').then(m => m.TherapistSkillsModule), data: { title: 'Therapy-skills' } },
    { path: 'therapyCategory', loadChildren: () => import('./therapy-category/therapy-category.module').then(m => m.TherapyCategoryModule), data: { title: 'Therapy-category' } },
    { path: 'therapySubcategory', loadChildren: () => import('./therapy-subcategory/therapy-subcategory.module').then(m => m.TherapySubcategoryModule), data: { title: 'Therapy-subcategory' } },
    { path: 'timeSlot', loadChildren: () => import('./time-slot/time-slot.module').then(m => m.TimeSlotModule), data: { title: 'Time-slot' } },
    { path: 'treatmentStatus', loadChildren: () => import('./treatment-status/treatment-status.module').then(m => m.TreatmentStatusModule), data: { title: 'Treatment-status' } },
    { path: 'userEmployee', loadChildren: () => import('./user-employee/user-employee.module').then(m => m.UserEmployeeModule), data: { title: 'Employee-module' } },
    { path: 'employee-type', loadChildren: () => import('./employee-type/employee-type.module').then(m => m.EmployeeTypeModule), data: { title: 'Employee-type' } },
    { path: 'therapySubCategoryDetail', loadChildren: () => import('./therapy-sub-category-detail/therapy-sub-category-detail.module').then(m => m.TherapySubCategoryDetailModule), data: { title: 'Subcategory' } },
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
