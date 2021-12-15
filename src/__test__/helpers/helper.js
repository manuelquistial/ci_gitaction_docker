function getContext(context) {
    const dataloaders = Object.keys(loaders).reduce((dataloaders, loaderKey) => ({
      ...dataloaders,
      [loaderKey]: loaders[loaderKey].getLoader(),
    }), {});
  
    return {
      ...context,
      req: {},
      dataloaders,
    };
  }

module.exports = {
    getContext
}