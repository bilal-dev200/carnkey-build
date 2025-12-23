import axiosClient from './axiosClient';

export const vehicalsApi = {
  getVehicallist: (payload) =>
    axiosClient.post(`/vehicle-sales/filters`, payload),


  getVehicalSlug: (slug) =>
    axiosClient.get(`/vehicle-sales/slug/${slug}`),

  ourservices: () =>
    axiosClient.get(`/our-services`),

  dealerVechical: () => {
    return axiosClient.get(`/dealer/vehicles`);
  },
  submitSale: (payload) => axiosClient.post("dealer/vehicle-sales", payload),
 homeBanner:()=>axiosClient.get(`advertisements/HOMEPAGE_BANNER`),


 checkAvailability:(payload)=>axiosClient.post(`vehicle-sales/check-availability`,payload),

   getVehicleDetail: (params) =>
    axiosClient.get(`/user/trade-ins/get-vehicle-detail`, { params }),

SendOtp:(payload)=>axiosClient.post(`user/trade-ins/send-otp`,payload),
verifyOtp:(payload)=>axiosClient.post(`user/trade-ins/verify-otp`,payload)
}; 