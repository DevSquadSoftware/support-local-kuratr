import { Company } from './../models/company';

import axios from 'axios';
export class CompanyService {
  async requestCompanyToBeAdded(company: Company) {
    const result = await axios.post('', company);
    if (result.status === 200) {

    }
  }
}
