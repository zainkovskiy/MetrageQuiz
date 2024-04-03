import axios from 'axios';
import { ApiModuleOne } from './models/data.models';
import type { IQuestion } from './types/questions';
import { IAppointData, IQuizeSlide } from './types/quize';
const API = 'https://crm.metragegroup.com/API/REST.php';

export const getOneQuize = async () => {
  const res = await axios.post<ApiModuleOne<IQuestion>>(API, {
    metrage_id: metrage_id,
    method: 'crm.training.get',
  });
  if (res.statusText === 'OK') {
    return res?.data?.result;
  }
};
export const getResult = async (quize: IQuizeSlide) => {
  const res = await axios.post<ApiModuleOne<IQuizeSlide>>(API, {
    metrage_id: metrage_id,
    method: 'crm.training.setResult',
    fields: { ...quize },
  });
  if (res.statusText === 'OK') {
    return res?.data?.result;
  }
};
export const getAppointCourse = async (UID: number) => {
  const res = await axios.post<ApiModuleOne<IAppointData>>(API, {
    metrage_id: metrage_id,
    method: 'crm.training.getCourse',
    fields: {
      UID: UID,
    },
  });
  if (res.statusText === 'OK') {
    return res?.data?.result;
  }
};
export const sendAppointCourse = async (data: IAppointData) => {
  const res = await axios.post<ApiModuleOne<IAppointData>>(API, {
    metrage_id: metrage_id,
    method: 'crm.training.setCourse',
    fields: data,
  });
  if (res.statusText === 'OK') {
    return 'OK';
  }
};

export const uploadPhoto = async (files: FileList) => {
  const data = new FormData();
  for (let file of files) {
    data.append('files[]', file);
  }
  const res = await axios.post(
    'https://crm.metragegroup.com/API/UserPhotoUpload.php',
    data
  );
  console.log(res);

  // if (res?.statusText === 'OK') {
  //   return res?.data || [];
  // }
  // return [];
};
interface Raw {
  [key: string]: string;
  entityType: string;
  author: string;
}
export const uploadFiles = async (files: FileList) => {
  const raw: Raw = { entityType: 'training', author: userId };
  const data = new FormData();
  for (let file of files) {
    data.append('files[]', file);
  }
  for (let key in raw) {
    data.append(key, raw[key]);
  }
  const res = await axios.post(
    'https://crm.metragegroup.com/API/Upload.php',
    data
  );
  if (res?.statusText === 'OK') {
    return res?.data || [];
  }
  return [];
};
