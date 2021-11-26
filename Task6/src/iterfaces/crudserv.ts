interface ICrudService {

    getData(params:object):any

    getDataOne(id:string, params:object):any

    addData(params:object):any

    updateData(id:string, params:object):any

    deleteData(id:string, params:object):any
}

export default ICrudService;