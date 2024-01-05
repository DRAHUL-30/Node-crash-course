export const readData = async (Model: any) => {
  try {
    return await Model.findAll();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const insertData = async (data: any, Model: any, options: { [key: string]: any } = {}) => {
  try {
    return await Model.create(data, { ...options });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateData = async (data: any, Model: any, whereCondition: any = {}) => {
    console.log(data, "DATA", whereCondition, "whereCondition")
  try {
    return await Model.update(data, {
            where: whereCondition,
        });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteData = async (Model: any) => {
    try {
        return await Model.destroy();
    } catch (error) {
        console.log(error);
        throw error;
    }
}
