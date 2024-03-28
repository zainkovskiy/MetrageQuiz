import axios from 'axios';
import { ApiModuleOne } from './models/data.models';
import type { IQuestion } from './types/questions';
import { IQuizeSlide } from './types/quize';
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
