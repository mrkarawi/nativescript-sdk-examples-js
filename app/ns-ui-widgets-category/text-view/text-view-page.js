const ListViewLinksModel = require("../../links-view-model");
const link = require("../../link");
const navigationLinks = [
    new link("Code behind", "ns-ui-widgets-category/text-view/code-behind/code-behind-page"),
    new link("Basics", "ns-ui-widgets-category/text-view/basics/basics-page")
];
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title
    });
}
exports.onNavigatingTo = onNavigatingTo;
