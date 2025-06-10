/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/star-rating/components/edit.js":
/*!***************************************************!*\
  !*** ./src/blocks/star-rating/components/edit.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/editor.scss */ "./src/blocks/star-rating/styles/editor.scss");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helpers */ "./src/helpers/index.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../constants */ "./src/constants.js");
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inspector */ "./src/blocks/star-rating/components/inspector.js");








function Edit(props) {
  const {
    attributes: {
      alignment,
      rating,
      background,
      borderRadius,
      border,
      iconSize,
      iconColor,
      ratingMargin,
      ratingPadding
    },
    setAttributes
  } = props;
  const borderStyle = {};
  if (border) {
    if (border.left) {
      borderStyle.borderLeft = `${border.left.width || "initial"} ${border.left.style || "solid"} ${border.left.color || "white"}`;
    }
    if (border.right) {
      borderStyle.borderRight = `${border.right.width || "initial"} ${border.right.style || "solid"} ${border.right.color || "white"}`;
    }
    if (border.top) {
      borderStyle.borderTop = `${border.top.width || "initial"} ${border.top.style || "solid"} ${border.top.color || "white"}`;
    }
    if (border.bottom) {
      borderStyle.borderBottom = `${border.bottom.width || "initial"} ${border.bottom.style || "solid"} ${border.bottom.color || "white"}`;
    }

    // Only set general border if no individual sides are defined
    if (!border.left && !border.right && !border.top && !border.bottom) {
      borderStyle.border = `${border.width || "initial"} ${border.style || "solid"} ${border.color || "white"}`;
    }
  } else {
    borderStyle.border = "none"; // Default to no border if `borders` is null or undefined
  }
  const ratingStyle = {
    backgroundColor: background,
    color: iconColor,
    fontSize: (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.getResponsiveRangeVal)(iconSize),
    ...(0,_helpers__WEBPACK_IMPORTED_MODULE_4__.getDimensionStyle)("padding", ratingPadding),
    ...(0,_helpers__WEBPACK_IMPORTED_MODULE_4__.getDimensionStyle)("margin", ratingMargin),
    borderRadius: (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.getResponsiveRangeVal)(borderRadius),
    ...borderStyle
  };
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: `${_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}-icon-box-wrapper`
  });
  const renderRatingIcons = () => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
        key: `full-${i}`,
        className: "fa-solid fa-star"
      }));
    }
    if (halfStar) {
      stars.push((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
        key: "half",
        className: "fa-regular fa-star-half-stroke"
      }));
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
        key: `empty-${i}`,
        className: "fa-regular fa-star"
      }));
    }
    return stars;
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    setAttributes({
      block_id: `${_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}-icon-box-${blockProps.id}`
    });
  }, []);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_7__["default"], {
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.AlignmentToolbar, {
    value: alignment,
    onChange: alignment => setAttributes({
      alignment
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: ratingStyle,
    className: `${_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}-align-${alignment} gutentools-star-rating `
  }, renderRatingIcons())));
}

/***/ }),

/***/ "./src/blocks/star-rating/components/inspector.js":
/*!********************************************************!*\
  !*** ./src/blocks/star-rating/components/inspector.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _custom_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../custom-control */ "./src/custom-control/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../constants */ "./src/constants.js");
/* harmony import */ var _custom_control_dimension__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../custom-control/dimension */ "./src/custom-control/dimension.js");
/* harmony import */ var _custom_control_responsive_range_wrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../custom-control/responsive-range-wrapper */ "./src/custom-control/responsive-range-wrapper.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../block.json */ "./src/blocks/star-rating/block.json");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../helpers */ "./src/helpers/index.js");










const InspectorPanel = props => {
  const {
    attributes: {
      rating,
      background,
      borderRadius,
      border,
      iconSize,
      iconColor,
      ratingMargin,
      ratingPadding
    },
    setAttributes
  } = props;
  const def = (0,_helpers__WEBPACK_IMPORTED_MODULE_9__.getDefaultAttr)(_block_json__WEBPACK_IMPORTED_MODULE_8__);
  const general = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("General", "gutentools"),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: "Rating",
    value: rating,
    onChange: rating => {
      setAttributes({
        rating
      });
    },
    min: 1,
    max: 5,
    step: 0.5,
    __nextHasNoMarginBottom: true
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_custom_control_responsive_range_wrapper__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Icon Size", "gutentools"),
    defaultValue: def("iconSize"),
    value: iconSize,
    onChange: iconSize => setAttributes({
      iconSize
    }),
    beforeIcon: ""
  })));
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
    group: "settings"
  }, general()), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
    group: "styles"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TabPanel, {
    className: `${_constants__WEBPACK_IMPORTED_MODULE_5__.prefix}-tab-panel`,
    activeClass: `${_constants__WEBPACK_IMPORTED_MODULE_5__.prefix}-active-tab`,
    tabs: [{
      name: "general",
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("General", "gutentools"),
      className: "tab-general"
    }, {
      name: "design",
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Design", "gutentools"),
      className: "tab-design"
    }, {
      name: "advanced",
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Advanced", "gutentools"),
      className: "tab-advanced"
    }]
  }, tab => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: tab.className
  }, tab.name === "general" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("General Settings", "gutentools"),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_custom_control__WEBPACK_IMPORTED_MODULE_4__.BorderControl, {
    value: border,
    onChange: border => setAttributes({
      border
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_custom_control_responsive_range_wrapper__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Border Radius", "gutentools"),
    defaultValue: def("borderRadius"),
    value: borderRadius,
    onChange: borderRadius => setAttributes({
      borderRadius
    }),
    beforeIcon: ""
  }))), tab.name === "design" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Color", "gutentools"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_custom_control__WEBPACK_IMPORTED_MODULE_4__.PanelColor, {
    colorSettings: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Background Color", "gutentools"),
      value: background,
      onChange: background => setAttributes({
        background: (0,_helpers__WEBPACK_IMPORTED_MODULE_9__.isUndefined)(background) ? "" : background
      })
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Icon Color", "gutentools"),
      value: iconColor,
      onChange: iconColor => setAttributes({
        iconColor: (0,_helpers__WEBPACK_IMPORTED_MODULE_9__.isUndefined)(iconColor) ? "" : iconColor
      })
    }]
  }))), tab.name === "advanced" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Spacing", "gutentools"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_custom_control_dimension__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Padding", "gutentools"),
    defaultValue: def("ratingPadding"),
    value: ratingPadding,
    onChange: ratingPadding => setAttributes({
      ratingPadding
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_custom_control_dimension__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Margin", "gutentools"),
    defaultValue: def("ratingMargin"),
    value: ratingMargin,
    onChange: ratingMargin => setAttributes({
      ratingMargin
    })
  })))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InspectorPanel);

/***/ }),

/***/ "./src/blocks/star-rating/index.js":
/*!*****************************************!*\
  !*** ./src/blocks/star-rating/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.scss */ "./src/blocks/star-rating/styles/style.scss");
/* harmony import */ var _components_edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/edit */ "./src/blocks/star-rating/components/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/blocks/star-rating/block.json");
/* harmony import */ var _helpers_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/svg */ "./src/helpers/svg.js");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  /**
   * @see ./edit.js
   */
  edit: _components_edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  icon: _helpers_svg__WEBPACK_IMPORTED_MODULE_4__["default"].startRating
});

/***/ }),

/***/ "./src/components/input-group.js":
/*!***************************************!*\
  !*** ./src/components/input-group.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/constants.js");



const InputGroup = ({
  lists,
  onChange,
  type,
  className = "",
  updateLinkState,
  isLinkActive,
  property
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
  className: className
}, lists.map((value, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
  key: index
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
  type: type,
  value: value,
  onChange: value => {
    onChange(index, value);
  },
  __nextHasNoMarginBottom: true,
  __next40pxDefaultSize: true
}), property && property[index] && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, property[index]))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
  className: `${_constants__WEBPACK_IMPORTED_MODULE_2__.prefix}-link ${isLinkActive ? "linked" : ""}`,
  onClick: updateLinkState
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
  className: `dashicons ${isLinkActive ? "dashicons-admin-links" : "dashicons-editor-unlink"}`
}))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputGroup);

/***/ }),

/***/ "./src/components/responsive-range-control.js":
/*!****************************************************!*\
  !*** ./src/components/responsive-range-control.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResponsiveRangeControl)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _responsive_view_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./responsive-view-icons */ "./src/components/responsive-view-icons.js");
/* harmony import */ var _size_unit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./size-unit */ "./src/components/size-unit.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers */ "./src/helpers/index.js");
/* harmony import */ var _custom_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../custom-control */ "./src/custom-control/index.js");






class ResponsiveRangeControl extends wp.element.Component {
  handleChange = (property, value) => {
    const oldData = this.getAttributesValues();
    const {
      onChange,
      name
    } = this.props;
    const activeView = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.getPreviewDevice)();
    const obj = {
      [property]: property === "activeUnit" ? value : {
        [activeView]: value
      }
    };
    const newData = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.merge)({}, oldData, obj);
    onChange(name, newData);
  };
  getAttributesValues = () => {
    const {
      value
    } = this.props;
    return value ? (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.merge)({}, _constants__WEBPACK_IMPORTED_MODULE_3__.defaultResponsiveRange, value) : _constants__WEBPACK_IMPORTED_MODULE_3__.defaultResponsiveRange;
  };
  render() {
    const {
      label,
      responsiveViews,
      step = "1",
      beforeIcon = "editor-textcolor",
      onChange
    } = this.props;
    const oldData = this.getAttributesValues();
    const {
      activeUnit,
      units = _constants__WEBPACK_IMPORTED_MODULE_3__.sizeUnit,
      values,
      range: {
        min,
        max
      }
    } = oldData;
    const activeView = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.getPreviewDevice)();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `${_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}-responsive-range-control`
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `${_constants__WEBPACK_IMPORTED_MODULE_3__.prefix}-label-section`
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "components-base-control__label"
    }, label), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_responsive_view_icons__WEBPACK_IMPORTED_MODULE_1__["default"], {
      responsiveViews: responsiveViews,
      onClick: view => {
        // we need to trigger this to re render the dom
        onChange("", oldData);
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_size_unit__WEBPACK_IMPORTED_MODULE_2__["default"], {
      units: units,
      activeUnit: activeUnit,
      onClick: v => this.handleChange("activeUnit", v)
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_custom_control__WEBPACK_IMPORTED_MODULE_5__.FontSizeControl, {
      step: step,
      min: min,
      max: max,
      beforeIcon: beforeIcon,
      label: false,
      allowReset: false,
      value: values[activeView],
      onChange: v => this.handleChange("values", v)
    }));
  }
}

/***/ }),

/***/ "./src/components/responsive-view-icons.js":
/*!*************************************************!*\
  !*** ./src/components/responsive-view-icons.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers */ "./src/helpers/index.js");




const ResponsiveViewsIcons = ({
  onClick = e => {},
  responsiveViews,
  className = ""
}) => {
  const activeView = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.getPreviewDevice)();
  const responsiveViewLists = responsiveViews.map((view, i) => {
    const icon = _constants__WEBPACK_IMPORTED_MODULE_1__.responsiveViewsIcon[view] ? _constants__WEBPACK_IMPORTED_MODULE_1__.responsiveViewsIcon[view] : "";
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      key: i,
      onClick: () => {
        onClick(view);
        (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.setPreviewDevice)(view);
      },
      className: `${activeView === view ? "active" : ""}`
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: icon
    }));
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToggleGroupControl, {
    className: `${className} ${_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}-responsive-view-icons`,
    __nextHasNoMarginBottom: true,
    __next40pxDefaultSize: true
  }, responsiveViewLists);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResponsiveViewsIcons);

/***/ }),

/***/ "./src/components/size-unit.js":
/*!*************************************!*\
  !*** ./src/components/size-unit.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);



const SizeUnit = ({
  onClick = e => {},
  units,
  activeUnit = "px",
  className = ""
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalToggleGroupControl, {
  className: `${className} ${_constants__WEBPACK_IMPORTED_MODULE_1__.prefix}-size-units`,
  __nextHasNoMarginBottom: true,
  __next40pxDefaultSize: true
}, units.map((unit, i) => {
  if (unit == "") {
    return;
  }
  const className = activeUnit === unit ? "active" : "";
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: className,
    key: i,
    onClick: e => onClick(unit)
  }, unit);
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SizeUnit);

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProvideContextMode: () => (/* binding */ ProvideContextMode),
/* harmony export */   backgroundPosition: () => (/* binding */ backgroundPosition),
/* harmony export */   backgroundRepeat: () => (/* binding */ backgroundRepeat),
/* harmony export */   backgroundSize: () => (/* binding */ backgroundSize),
/* harmony export */   colors: () => (/* binding */ colors),
/* harmony export */   containerWidth: () => (/* binding */ containerWidth),
/* harmony export */   defaultDimension: () => (/* binding */ defaultDimension),
/* harmony export */   defaultDimensionValue: () => (/* binding */ defaultDimensionValue),
/* harmony export */   defaultFontFamily: () => (/* binding */ defaultFontFamily),
/* harmony export */   defaultFontWeight: () => (/* binding */ defaultFontWeight),
/* harmony export */   defaultResponsiveRange: () => (/* binding */ defaultResponsiveRange),
/* harmony export */   defaultResponsiveViews: () => (/* binding */ defaultResponsiveViews),
/* harmony export */   defaultState: () => (/* binding */ defaultState),
/* harmony export */   defaultTextTransform: () => (/* binding */ defaultTextTransform),
/* harmony export */   defaultViews: () => (/* binding */ defaultViews),
/* harmony export */   faFAQIcons: () => (/* binding */ faFAQIcons),
/* harmony export */   faIcons: () => (/* binding */ faIcons),
/* harmony export */   faSocialIcons: () => (/* binding */ faSocialIcons),
/* harmony export */   gradients: () => (/* binding */ gradients),
/* harmony export */   prefix: () => (/* binding */ prefix),
/* harmony export */   responsiveViewsIcon: () => (/* binding */ responsiveViewsIcon),
/* harmony export */   sizeUnit: () => (/* binding */ sizeUnit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);


const {
  applyFilters
} = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.createHooks)();

const prefix = "gutentools";
const defaultDimension = ["top", "right", "buttom", "left"];
const sizeUnit = ["px", "em"];
const ProvideContextMode = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Please provide context mode as a props", "gutentools"));
const defaultState = {
  activeUnit: "px",
  isLinkActive: false
};
const containerWidth = {
  activeUnit: "px",
  units: ["px"],
  range: {
    min: 1,
    max: 2000
  },
  values: {
    desktop: 1140,
    tablet: 720,
    mobile: 540
  }
};
const defaultTextTransform = [{
  value: "",
  label: "Initial"
}, {
  value: "inherit",
  label: "Inherit"
}, {
  value: "none",
  label: "None"
}, {
  value: "capitalize",
  label: "Capitalize"
}, {
  value: "uppercase",
  label: "UPPERCASE"
}, {
  value: "lowercase",
  label: "lowercase"
}];
const defaultDimensionValue = {
  activeUnit: "px",
  isLinkActive: false,
  properties: ["top", "right", "bottom", "left"],
  responsiveViews: ["desktop", "tablet", "mobile"],
  units: ["px", "rem"],
  values: {
    desktop: [0, 0, 0, 0],
    tablet: [0, 0, 0, 0],
    mobile: [0, 0, 0, 0]
  }
};
const defaultViews = {
  desktop: [],
  tablet: [],
  mobile: []
};
const defaultFontFamily = applyFilters("gutenToolsFonts", [{
  value: "",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Default", "gutentools")
}, {
  value: "Roboto",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Roboto", "gutentools")
}, {
  value: "Raleway",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Raleway", "gutentools")
}, {
  value: "Open Sans",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Open Sans", "gutentools")
}]);
const defaultFontWeight = [{
  value: 300,
  label: 300
}, {
  value: 400,
  label: 400
}, {
  value: 500,
  label: 500
}, {
  value: 600,
  label: 600
}, {
  value: 700,
  label: 700
}, {
  value: 800,
  label: 800
}, {
  value: 900,
  label: 900
}];
const responsiveViewsIcon = {
  desktop: "dashicons dashicons-desktop",
  tablet: "dashicons dashicons-tablet",
  mobile: "dashicons dashicons-smartphone"
};
const defaultResponsiveViews = ["desktop", "tablet", "mobile"];
const defaultResponsiveRange = {
  activeUnit: "px",
  range: {
    min: 0,
    max: 100
  },
  values: {
    desktop: 0,
    tablet: 0,
    mobile: 0
  }
};
const colors = [{
  name: "white",
  color: "#ffffff"
}, {
  name: "black",
  color: "#000000"
}, {
  name: "blue",
  color: "#0012ff"
}, {
  name: "grey",
  color: "#cfcfcf"
}, {
  name: "red",
  color: "#ff0000"
}, {
  name: "sky",
  color: "#2de1f7"
}, {
  name: "orange",
  color: "#ff8e07"
}, {
  name: "pink",
  color: "#f248b6"
}, {
  name: "yellow",
  color: "#FFD100"
}, {
  name: "purple",
  color: "#800080"
}, {
  name: "tan",
  color: "#D2B48C"
}, {
  name: "navy",
  color: "#000080"
}];
const gradients = [{
  name: "JShine",
  gradient: "linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)",
  slug: "jshine"
}, {
  name: "Moonlit Asteroid",
  gradient: "linear-gradient(135deg,#0F2027 0%, #203A43 0%, #2c5364 100%)",
  slug: "moonlit-asteroid"
}, {
  name: "Rastafarie",
  gradient: "linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)",
  slug: "rastafari"
}];
const backgroundPosition = [{
  label: "default",
  value: ""
}, {
  label: "top left",
  value: "top left"
}, {
  label: "top center",
  value: "top center"
}, {
  label: "top right",
  value: "top right"
}, {
  label: "center left",
  value: "center left"
}, {
  label: "center center",
  value: "center center"
}, {
  label: "center right",
  value: "center right"
}, {
  label: "bottom left",
  value: "bottom left"
}, {
  label: "bottom center",
  value: "bottom center"
}, {
  label: "bottom right",
  value: "bottom right"
}];
const backgroundRepeat = [{
  label: "default",
  value: ""
}, {
  label: "repeat",
  value: "repeat"
}, {
  label: "space",
  value: "space"
}, {
  label: "round",
  value: "round"
}, {
  label: "no-repeat",
  value: "no-repeat"
}, {
  label: "repeat-x",
  value: "repeat-x"
}, {
  label: "repeat-y",
  value: "repeat-y"
}];
const backgroundSize = [{
  label: "default",
  value: ""
}, {
  label: "cover",
  value: "cover"
}, {
  label: "contain",
  value: "contain"
}];
const faSocialIcons = ["fa-facebook", "fa-facebook-f", "fa-facebook-official", "fa-facebook-square", "fa-flickr", "fa-google", "fa-google-plus", "fa-google-plus-circle", "fa-google-plus-official", "fa-google-plus-square", "fa-google-wallet", "fa-instagram", "fa-linkedin", "fa-linkedin-square", "fa-pinterest", "fa-pinterest-p", "fa-pinterest-square", "fa-twitter", "fa-twitter-square", "fa-qq", "fa-quora", "fa-reddit", "fa-reddit-alien", "fa-reddit-square", "fa-skype", "fa-snapchat", "fa-snapchat-ghost", "fa-stumbleupon", "fa-stumbleupon-circle", "fa-snapchat-square", "fa-telegram", "fa-tumblr", "fa-tumblr-square", "fa-vimeo", "fa-vimeo-square", "fa-vine", "fa-wechat", "fa-whatsapp", "fa-yahoo", "fa-youtube", "fa-youtube-play", "fa-youtube-square"];
const faFAQIcons = ["fa-solid fa-arrow-up", "fa-solid fa-arrow-down", "fa-solid fa-arrow-left", "fa-solid fa-arrow-right", "fa-solid fa-chevron-up", "fa-solid fa-chevron-down", "fa-solid fa-chevron-left", "fa-solid fa-chevron-right", "fa-solid fa-caret-up", "fa-solid fa-caret-down", "fa-solid fa-caret-left", "fa-solid fa-caret-right", "fa-solid fa-plus", "fa-solid fa-minus", "fa-solid fa-circle-plus", "fa-solid fa-circle-minus", "fa-solid fa-hand-point-up", "fa-solid fa-hand-point-down", "fa-solid fa-hand-point-left", "fa-solid fa-hand-point-right", "fa-solid fa-thumbs-up", "fa-solid fa-thumbs-down", "fa-solid fa-chevron-circle-up", "fa-solid fa-chevron-circle-down", "fa-solid fa-arrow-circle-up", "fa-solid fa-arrow-circle-down"];
const faIcons = ["fa-solid fa-house", "fa-solid fa-magnifying-glass", "fa-solid fa-user", "fa-regular fa-user", "fa-brands fa-facebook", "fa-solid fa-check", "fa-solid fa-download", "fa-brands fa-twitter", "fa-solid fa-image", "fa-regular fa-image", "fa-brands fa-instagram", "fa-solid fa-phone", "fa-brands fa-tiktok", "fa-solid fa-bars", "fa-solid fa-envelope", "fa-regular fa-envelope", "fa-brands fa-linkedin", "fa-solid fa-star", "fa-regular fa-star", "fa-solid fa-location-dot", "fa-brands fa-github", "fa-solid fa-music", "fa-solid fa-wand-magic-sparkles", "fa-solid fa-heart", "fa-regular fa-heart", "fa-solid fa-arrow-right", "fa-brands fa-discord", "fa-solid fa-circle-xmark", "fa-regular fa-circle-xmark", "fa-solid fa-bomb", "fa-solid fa-poo", "fa-solid fa-camera-retro", "fa-solid fa-xmark", "fa-brands fa-youtube", "fa-solid fa-cloud", "fa-solid fa-comment", "fa-regular fa-comment", "fa-solid fa-caret-up", "fa-solid fa-truck-fast", "fa-brands fa-wordpress", "fa-solid fa-pen-nib", "fa-solid fa-arrow-up", "fa-solid fa-hippo", "fa-solid fa-face-smile", "fa-regular fa-face-smile", "fa-solid fa-calendar-days", "fa-regular fa-calendar-days", "fa-solid fa-paperclip", "fa-brands fa-slack", "fa-solid fa-shield-halved", "fa-brands fa-figma", "fa-solid fa-file", "fa-regular fa-file", "fa-solid fa-bell", "fa-regular fa-bell", "fa-solid fa-cart-shopping", "fa-solid fa-clipboard", "fa-regular fa-clipboard", "fa-solid fa-filter", "fa-solid fa-circle-info", "fa-solid fa-arrow-up-from-bracket", "fa-solid fa-bolt", "fa-solid fa-car", "fa-solid fa-ghost", "fa-brands fa-apple", "fa-solid fa-mug-hot", "fa-solid fa-circle-user", "fa-regular fa-circle-user", "fa-solid fa-pen", "fa-brands fa-google", "fa-solid fa-umbrella", "fa-solid fa-gift", "fa-solid fa-film", "fa-brands fa-stripe", "fa-solid fa-list", "fa-solid fa-gear", "fa-brands fa-algolia", "fa-solid fa-trash", "fa-solid fa-circle-up", "fa-regular fa-circle-up", "fa-brands fa-docker", "fa-solid fa-circle-down", "fa-regular fa-circle-down", "fa-solid fa-inbox", "fa-solid fa-rotate-right", "fa-solid fa-lock", "fa-brands fa-windows", "fa-solid fa-headphones", "fa-solid fa-barcode", "fa-solid fa-tag", "fa-solid fa-book", "fa-solid fa-bookmark", "fa-regular fa-bookmark", "fa-brands fa-paypal", "fa-solid fa-print", "fa-solid fa-camera", "fa-brands fa-stack-overflow", "fa-solid fa-font", "fa-solid fa-video", "fa-solid fa-circle-half-stroke", "fa-solid fa-droplet", "fa-solid fa-pen-to-square", "fa-regular fa-pen-to-square", "fa-solid fa-share-from-square", "fa-regular fa-share-from-square", "fa-solid fa-plus", "fa-solid fa-minus", "fa-brands fa-kickstarter", "fa-solid fa-share", "fa-solid fa-circle-exclamation", "fa-solid fa-fire", "fa-solid fa-eye", "fa-regular fa-eye", "fa-solid fa-eye-slash", "fa-regular fa-eye-slash", "fa-brands fa-dribbble", "fa-solid fa-plane", "fa-solid fa-magnet", "fa-solid fa-hand", "fa-regular fa-hand", "fa-solid fa-folder", "fa-regular fa-folder", "fa-solid fa-folder-open", "fa-regular fa-folder-open", "fa-solid fa-money-bill", "fa-brands fa-dropbox", "fa-solid fa-thumbs-up", "fa-regular fa-thumbs-up", "fa-solid fa-thumbs-down", "fa-regular fa-thumbs-down", "fa-solid fa-comments", "fa-regular fa-comments", "fa-solid fa-lemon", "fa-regular fa-lemon", "fa-solid fa-key", "fa-solid fa-thumbtack", "fa-solid fa-gears", "fa-solid fa-paper-plane", "fa-regular fa-paper-plane", "fa-solid fa-code", "fa-brands fa-squarespace", "fa-solid fa-globe", "fa-solid fa-truck", "fa-solid fa-city", "fa-solid fa-ticket", "fa-solid fa-tree", "fa-solid fa-wifi", "fa-solid fa-paint-roller", "fa-solid fa-bicycle", "fa-brands fa-android", "fa-solid fa-sliders", "fa-solid fa-brush", "fa-solid fa-hashtag", "fa-solid fa-flask", "fa-solid fa-briefcase", "fa-solid fa-compass", "fa-regular fa-compass", "fa-solid fa-dumpster-fire", "fa-solid fa-person", "fa-solid fa-person-dress", "fa-brands fa-shopify", "fa-solid fa-address-book", "fa-regular fa-address-book", "fa-solid fa-bath", "fa-solid fa-handshake", "fa-regular fa-handshake", "fa-brands fa-medium", "fa-solid fa-snowflake", "fa-regular fa-snowflake", "fa-solid fa-right-to-bracket", "fa-solid fa-earth-americas", "fa-solid fa-cloud-arrow-up", "fa-solid fa-binoculars", "fa-solid fa-palette", "fa-brands fa-codepen", "fa-solid fa-layer-group", "fa-solid fa-users", "fa-solid fa-gamepad", "fa-solid fa-business-time", "fa-brands fa-cloudflare", "fa-solid fa-feather", "fa-solid fa-sun", "fa-regular fa-sun", "fa-solid fa-link", "fa-solid fa-pen-fancy", "fa-brands fa-airbnb", "fa-solid fa-fish", "fa-solid fa-bug", "fa-solid fa-shop", "fa-solid fa-mug-saucer", "fa-brands fa-vimeo", "fa-solid fa-landmark", "fa-solid fa-poo-storm", "fa-brands fa-whatsapp", "fa-solid fa-chart-simple", "fa-solid fa-shirt", "fa-solid fa-anchor", "fa-solid fa-quote-left", "fa-solid fa-bag-shopping", "fa-solid fa-gauge", "fa-solid fa-code-compare", "fa-solid fa-user-secret", "fa-solid fa-stethoscope", "fa-solid fa-car-side", "fa-solid fa-hand-holding-heart", "fa-brands fa-intercom", "fa-solid fa-truck-front", "fa-solid fa-cable-car", "fa-solid fa-mountain-sun", "fa-solid fa-location-pin", "fa-solid fa-info", "fa-solid fa-user-minus", "fa-solid fa-calendar", "fa-regular fa-calendar", "fa-solid fa-cart-plus", "fa-solid fa-clock", "fa-regular fa-clock", "fa-solid fa-circle", "fa-regular fa-circle", "fa-solid fa-play", "fa-solid fa-cross", "fa-solid fa-backward", "fa-solid fa-handshake-slash", "fa-solid fa-chevron-up", "fa-solid fa-passport", "fa-brands fa-usps", "fa-solid fa-question", "fa-solid fa-pencil", "fa-solid fa-phone-volume", "fa-brands fa-wix", "fa-solid fa-upload", "fa-solid fa-strikethrough", "fa-brands fa-line", "fa-solid fa-credit-card", "fa-regular fa-credit-card", "fa-solid fa-street-view", "fa-solid fa-database", "fa-solid fa-copy", "fa-regular fa-copy", "fa-solid fa-mobile", "fa-solid fa-square", "fa-regular fa-square", "fa-solid fa-sort", "fa-solid fa-forward", "fa-solid fa-hourglass-start", "fa-brands fa-behance", "fa-solid fa-newspaper", "fa-regular fa-newspaper", "fa-solid fa-notes-medical", "fa-solid fa-table", "fa-solid fa-building", "fa-regular fa-building", "fa-solid fa-stop", "fa-brands fa-openid", "fa-solid fa-store", "fa-solid fa-flag", "fa-regular fa-flag", "fa-brands fa-product-hunt", "fa-solid fa-file-excel", "fa-regular fa-file-excel", "fa-solid fa-network-wired", "fa-solid fa-cash-register", "fa-solid fa-file-export", "fa-brands fa-internet-explorer", "fa-solid fa-hand-point-up", "fa-regular fa-hand-point-up", "fa-brands fa-pagelines", "fa-solid fa-angle-up", "fa-solid fa-shield", "fa-brands fa-teamspeak", "fa-solid fa-address-card", "fa-regular fa-address-card", "fa-solid fa-expand", "fa-solid fa-flag-checkered", "fa-brands fa-html5", "fa-solid fa-quote-right", "fa-solid fa-tags", "fa-solid fa-server", "fa-solid fa-user-nurse", "fa-solid fa-video-slash", "fa-solid fa-arrow-down", "fa-solid fa-blog", "fa-solid fa-school", "fa-solid fa-file-invoice", "fa-solid fa-rocket", "fa-solid fa-spinner", "fa-brands fa-telegram", "fa-solid fa-tty", "fa-solid fa-exclamation", "fa-solid fa-water", "fa-solid fa-registered", "fa-regular fa-registered", "fa-solid fa-signature", "fa-solid fa-laptop", "fa-solid fa-restroom", "fa-solid fa-power-off", "fa-solid fa-sitemap", "fa-solid fa-icons", "fa-solid fa-desktop", "fa-solid fa-moon", "fa-regular fa-moon", "fa-solid fa-calendar-week", "fa-brands fa-pinterest", "fa-solid fa-pause", "fa-solid fa-file-word", "fa-regular fa-file-word", "fa-solid fa-vials", "fa-solid fa-language", "fa-solid fa-door-open", "fa-solid fa-brain", "fa-solid fa-hotel", "fa-solid fa-marker", "fa-solid fa-star-of-life", "fa-solid fa-leaf", "fa-solid fa-walkie-talkie", "fa-solid fa-shower", "fa-brands fa-dashcube", "fa-solid fa-caret-down", "fa-brands fa-ideal", "fa-brands fa-salesforce", "fa-solid fa-file-import", "fa-solid fa-place-of-worship", "fa-solid fa-wallet", "fa-solid fa-slash", "fa-brands fa-readme", "fa-solid fa-award", "fa-solid fa-toggle-on", "fa-solid fa-ship", "fa-brands fa-free-code-camp", "fa-brands fa-soundcloud", "fa-solid fa-chalkboard", "fa-brands fa-square-twitter", "fa-solid fa-hands", "fa-solid fa-signal", "fa-solid fa-motorcycle", "fa-solid fa-arrow-up-right-from-square", "fa-solid fa-audio-description", "fa-brands fa-accessible-icon", "fa-solid fa-seedling", "fa-solid fa-closed-captioning", "fa-regular fa-closed-captioning", "fa-solid fa-train", "fa-brands fa-cc-visa", "fa-solid fa-arrow-left", "fa-solid fa-wrench", "fa-solid fa-microchip", "fa-solid fa-record-vinyl", "fa-brands fa-goodreads-g", "fa-solid fa-trophy", "fa-solid fa-hammer", "fa-solid fa-diamond", "fa-solid fa-robot", "fa-solid fa-file-pdf", "fa-regular fa-file-pdf", "fa-brands fa-google-play", "fa-solid fa-hospital", "fa-regular fa-hospital", "fa-solid fa-file-contract", "fa-solid fa-square-xmark", "fa-solid fa-square-check", "fa-regular fa-square-check", "fa-solid fa-crown", "fa-brands fa-react", "fa-solid fa-user-plus", "fa-solid fa-virus", "fa-solid fa-child", "fa-solid fa-repeat", "fa-solid fa-cube", "fa-solid fa-copyright", "fa-regular fa-copyright", "fa-solid fa-medal", "fa-solid fa-bullseye", "fa-solid fa-mask", "fa-solid fa-circle-check", "fa-regular fa-circle-check", "fa-solid fa-radio", "fa-solid fa-reply", "fa-solid fa-chair", "fa-solid fa-route", "fa-brands fa-wikipedia-w", "fa-solid fa-plug", "fa-solid fa-calculator", "fa-solid fa-dragon", "fa-solid fa-certificate", "fa-solid fa-fingerprint", "fa-solid fa-road", "fa-solid fa-crosshairs", "fa-solid fa-heading", "fa-solid fa-percent", "fa-brands fa-square-js", "fa-solid fa-user-tie", "fa-brands fa-java", "fa-solid fa-square-minus", "fa-regular fa-square-minus", "fa-solid fa-i-cursor", "fa-solid fa-church", "fa-solid fa-joint", "fa-solid fa-comments-dollar", "fa-solid fa-truck-monster", "fa-solid fa-recycle", "fa-brands fa-square-pinterest", "fa-solid fa-warehouse", "fa-solid fa-ruler", "fa-brands fa-python", "fa-solid fa-soap", "fa-solid fa-scroll", "fa-brands fa-skype", "fa-solid fa-coins", "fa-solid fa-wind", "fa-solid fa-baby", "fa-solid fa-lightbulb", "fa-regular fa-lightbulb", "fa-brands fa-linux", "fa-brands fa-node", "fa-brands fa-rebel", "fa-solid fa-voicemail", "fa-solid fa-puzzle-piece", "fa-solid fa-keyboard", "fa-regular fa-keyboard", "fa-solid fa-clone", "fa-regular fa-clone", "fa-solid fa-eraser", "fa-solid fa-wine-bottle", "fa-solid fa-dice", "fa-solid fa-receipt", "fa-solid fa-ring", "fa-brands fa-etsy", "fa-solid fa-unlock", "fa-brands fa-discourse", "fa-solid fa-solar-panel", "fa-solid fa-ruler-vertical", "fa-solid fa-circle-notch", "fa-solid fa-people-arrows", "fa-solid fa-dollar-sign", "fa-brands fa-amazon", "fa-solid fa-tablet", "fa-solid fa-not-equal", "fa-solid fa-glasses", "fa-solid fa-headset", "fa-solid fa-code-branch", "fa-brands fa-glide-g", "fa-solid fa-gopuram", "fa-solid fa-images", "fa-regular fa-images", "fa-solid fa-window-restore", "fa-regular fa-window-restore", "fa-solid fa-industry", "fa-brands fa-gitlab", "fa-brands fa-spotify", "fa-solid fa-stamp", "fa-solid fa-microphone-slash", "fa-brands fa-think-peaks", "fa-brands fa-microsoft", "fa-solid fa-cookie-bite", "fa-solid fa-otter", "fa-solid fa-chevron-down", "fa-solid fa-kiwi-bird", "fa-solid fa-viruses", "fa-brands fa-elementor", "fa-brands fa-pied-piper", "fa-brands fa-square-youtube", "fa-solid fa-umbrella-beach", "fa-solid fa-subscript", "fa-solid fa-tablets", "fa-brands fa-cc-mastercard", "fa-brands fa-facebook-messenger", "fa-brands fa-atlassian", "fa-brands fa-playstation", "fa-brands fa-fly", "fa-solid fa-microphone", "fa-brands fa-meetup", "fa-solid fa-border-none", "fa-solid fa-dumbbell", "fa-brands fa-twitch", "fa-solid fa-plane-departure", "fa-brands fa-waze", "fa-solid fa-z", "fa-solid fa-yin-yang", "fa-solid fa-yen-sign", "fa-solid fa-y", "fa-solid fa-xmarks-lines", "fa-solid fa-x-ray", "fa-solid fa-x", "fa-solid fa-worm", "fa-solid fa-won-sign", "fa-solid fa-wine-glass-empty", "fa-solid fa-wine-glass", "fa-solid fa-window-minimize", "fa-solid fa-window-maximize", "fa-solid fa-whiskey-glass", "fa-solid fa-wheelchair-move", "fa-solid fa-wheelchair", "fa-solid fa-wheat-awn-circle-exclamation", "fa-solid fa-wheat-awn", "fa-solid fa-weight-scale", "fa-solid fa-weight-hanging", "fa-solid fa-wave-square", "fa-solid fa-water-ladder", "fa-solid fa-wand-sparkles", "fa-solid fa-wand-magic", "fa-solid fa-w", "fa-solid fa-vr-cardboard", "fa-solid fa-volume-xmark", "fa-solid fa-volume-off", "fa-solid fa-volume-low", "fa-solid fa-volume-high", "fa-solid fa-volleyball", "fa-solid fa-volcano", "fa-solid fa-virus-slash", "fa-solid fa-virus-covid-slash", "fa-solid fa-virus-covid", "fa-solid fa-vihara", "fa-solid fa-vial-virus", "fa-solid fa-vial-circle-check", "fa-solid fa-vial", "fa-solid fa-vest-patches", "fa-solid fa-vest", "fa-solid fa-venus-mars", "fa-solid fa-venus-double", "fa-solid fa-venus", "fa-solid fa-vector-square", "fa-solid fa-vault", "fa-solid fa-van-shuttle", "fa-solid fa-v", "fa-solid fa-utensils", "fa-solid fa-users-viewfinder", "fa-solid fa-users-slash", "fa-solid fa-users-rectangle", "fa-solid fa-users-rays", "fa-solid fa-users-line", "fa-solid fa-users-gear", "fa-solid fa-users-between-lines", "fa-solid fa-user-xmark", "fa-solid fa-user-tag", "fa-solid fa-user-slash", "fa-solid fa-user-shield", "fa-solid fa-user-pen", "fa-solid fa-user-ninja", "fa-solid fa-user-lock", "fa-solid fa-user-large-slash", "fa-solid fa-user-large", "fa-solid fa-user-injured", "fa-solid fa-user-group", "fa-solid fa-user-graduate", "fa-solid fa-user-gear", "fa-solid fa-user-doctor", "fa-solid fa-user-clock", "fa-solid fa-user-check", "fa-solid fa-user-astronaut", "fa-solid fa-up-right-from-square", "fa-solid fa-up-right-and-down-left-from-center", "fa-solid fa-up-long", "fa-solid fa-up-down-left-right", "fa-solid fa-up-down", "fa-solid fa-unlock-keyhole", "fa-solid fa-universal-access", "fa-solid fa-underline", "fa-solid fa-u", "fa-solid fa-tv", "fa-solid fa-turn-up", "fa-solid fa-turn-down", "fa-solid fa-turkish-lira-sign", "fa-solid fa-truck-ramp-box", "fa-solid fa-truck-plane", "fa-solid fa-truck-pickup", "fa-solid fa-truck-moving", "fa-solid fa-truck-medical", "fa-solid fa-truck-field-un", "fa-solid fa-truck-field", "fa-solid fa-truck-droplet", "fa-solid fa-truck-arrow-right", "fa-solid fa-trowel-bricks", "fa-solid fa-trowel", "fa-solid fa-triangle-exclamation", "fa-solid fa-tree-city", "fa-solid fa-trash-can-arrow-up", "fa-solid fa-trash-can", "fa-solid fa-trash-arrow-up", "fa-solid fa-transgender", "fa-solid fa-train-tram", "fa-solid fa-train-subway", "fa-solid fa-trailer", "fa-solid fa-traffic-light", "fa-solid fa-trademark", "fa-solid fa-tractor", "fa-solid fa-tower-observation", "fa-solid fa-tower-cell", "fa-solid fa-tower-broadcast", "fa-solid fa-tornado", "fa-solid fa-torii-gate", "fa-solid fa-tooth", "fa-solid fa-toolbox", "fa-solid fa-toilets-portable", "fa-solid fa-toilet-portable", "fa-solid fa-toilet-paper-slash", "fa-solid fa-toilet-paper", "fa-solid fa-toilet", "fa-solid fa-toggle-off", "fa-solid fa-timeline", "fa-solid fa-ticket-simple", "fa-solid fa-thermometer", "fa-solid fa-text-width", "fa-solid fa-text-slash", "fa-solid fa-text-height", "fa-solid fa-terminal", "fa-solid fa-tents", "fa-solid fa-tent-arrows-down", "fa-solid fa-tent-arrow-turn-left", "fa-solid fa-tent-arrow-left-right", "fa-solid fa-tent-arrow-down-to-line", "fa-solid fa-tent", "fa-solid fa-tenge-sign", "fa-solid fa-temperature-three-quarters", "fa-solid fa-temperature-quarter", "fa-solid fa-temperature-low", "fa-solid fa-temperature-high", "fa-solid fa-temperature-half", "fa-solid fa-temperature-full", "fa-solid fa-temperature-empty", "fa-solid fa-temperature-arrow-up", "fa-solid fa-temperature-arrow-down", "fa-solid fa-teeth-open", "fa-solid fa-teeth", "fa-solid fa-taxi", "fa-solid fa-tarp-droplet", "fa-solid fa-tarp", "fa-solid fa-tape", "fa-solid fa-tachograph-digital", "fa-solid fa-tablet-screen-button", "fa-solid fa-tablet-button", "fa-solid fa-table-tennis-paddle-ball", "fa-solid fa-table-list", "fa-solid fa-table-columns", "fa-solid fa-table-cells-row-lock", "fa-solid fa-table-cells-large", "fa-solid fa-table-cells-column-lock", "fa-solid fa-table-cells", "fa-solid fa-t", "fa-solid fa-syringe", "fa-solid fa-synagogue", "fa-solid fa-swatchbook", "fa-solid fa-superscript", "fa-solid fa-sun-plant-wilt", "fa-solid fa-suitcase-rolling", "fa-solid fa-suitcase-medical", "fa-solid fa-suitcase", "fa-solid fa-stroopwafel", "fa-solid fa-store-slash", "fa-solid fa-stopwatch-20", "fa-solid fa-stopwatch", "fa-solid fa-sterling-sign", "fa-solid fa-star-of-david", "fa-solid fa-star-half-stroke", "fa-solid fa-star-half", "fa-solid fa-star-and-crescent", "fa-solid fa-stapler", "fa-solid fa-stairs", "fa-solid fa-staff-snake", "fa-solid fa-square-virus", "fa-solid fa-square-up-right", "fa-solid fa-square-share-nodes", "fa-solid fa-square-rss", "fa-solid fa-square-root-variable", "fa-solid fa-square-poll-vertical", "fa-solid fa-square-poll-horizontal", "fa-solid fa-square-plus", "fa-solid fa-square-phone-flip", "fa-solid fa-square-phone", "fa-solid fa-square-person-confined", "fa-solid fa-square-pen", "fa-solid fa-square-parking", "fa-solid fa-square-nfi", "fa-solid fa-square-h", "fa-solid fa-square-full", "fa-solid fa-square-envelope", "fa-solid fa-square-caret-up", "fa-solid fa-square-caret-right", "fa-solid fa-square-caret-left", "fa-solid fa-square-caret-down", "fa-solid fa-square-arrow-up-right", "fa-solid fa-spray-can-sparkles", "fa-solid fa-spray-can", "fa-solid fa-spoon", "fa-solid fa-splotch", "fa-solid fa-spider", "fa-solid fa-spell-check", "fa-solid fa-spaghetti-monster-flying", "fa-solid fa-spa", "fa-solid fa-sort-up", "fa-solid fa-sort-down", "fa-solid fa-socks", "fa-solid fa-snowplow", "fa-solid fa-snowman", "fa-solid fa-smoking", "fa-solid fa-smog", "fa-solid fa-sleigh", "fa-solid fa-skull-crossbones", "fa-solid fa-skull", "fa-solid fa-sink", "fa-solid fa-sim-card", "fa-solid fa-signs-post", "fa-solid fa-sign-hanging", "fa-solid fa-shuttle-space", "fa-solid fa-shuffle", "fa-solid fa-shrimp", "fa-solid fa-shop-slash", "fa-solid fa-shop-lock", "fa-solid fa-shoe-prints", "fa-solid fa-shield-virus", "fa-solid fa-shield-heart", "fa-solid fa-shield-dog", "fa-solid fa-shield-cat", "fa-solid fa-shekel-sign", "fa-solid fa-sheet-plastic", "fa-solid fa-share-nodes", "fa-solid fa-shapes", "fa-solid fa-section", "fa-solid fa-sd-card", "fa-solid fa-scroll-torah", "fa-solid fa-screwdriver-wrench", "fa-solid fa-screwdriver", "fa-solid fa-scissors", "fa-solid fa-school-lock", "fa-solid fa-school-flag", "fa-solid fa-school-circle-xmark", "fa-solid fa-school-circle-exclamation", "fa-solid fa-school-circle-check", "fa-solid fa-scale-unbalanced-flip", "fa-solid fa-scale-unbalanced", "fa-solid fa-scale-balanced", "fa-solid fa-satellite-dish", "fa-solid fa-satellite", "fa-solid fa-sailboat", "fa-solid fa-sack-xmark", "fa-solid fa-sack-dollar", "fa-solid fa-s", "fa-solid fa-rupiah-sign", "fa-solid fa-rupee-sign", "fa-solid fa-ruler-horizontal", "fa-solid fa-ruler-combined", "fa-solid fa-rug", "fa-solid fa-ruble-sign", "fa-solid fa-rss", "fa-solid fa-rotate-left", "fa-solid fa-rotate", "fa-solid fa-road-spikes", "fa-solid fa-road-lock", "fa-solid fa-road-circle-xmark", "fa-solid fa-road-circle-exclamation", "fa-solid fa-road-circle-check", "fa-solid fa-road-bridge", "fa-solid fa-road-barrier", "fa-solid fa-right-long", "fa-solid fa-right-left", "fa-solid fa-right-from-bracket", "fa-solid fa-ribbon", "fa-solid fa-retweet", "fa-solid fa-republican", "fa-solid fa-reply-all", "fa-solid fa-rectangle-xmark", "fa-solid fa-rectangle-list", "fa-solid fa-rectangle-ad", "fa-solid fa-ranking-star", "fa-solid fa-rainbow", "fa-solid fa-radiation", "fa-solid fa-r", "fa-solid fa-qrcode", "fa-solid fa-q", "fa-solid fa-pump-soap", "fa-solid fa-pump-medical", "fa-solid fa-prescription-bottle-medical", "fa-solid fa-prescription-bottle", "fa-solid fa-prescription", "fa-solid fa-poop", "fa-solid fa-podcast", "fa-solid fa-plus-minus", "fa-solid fa-plug-circle-xmark", "fa-solid fa-plug-circle-plus", "fa-solid fa-plug-circle-minus", "fa-solid fa-plug-circle-exclamation", "fa-solid fa-plug-circle-check", "fa-solid fa-plug-circle-bolt", "fa-solid fa-plate-wheat", "fa-solid fa-plant-wilt", "fa-solid fa-plane-up", "fa-solid fa-plane-slash", "fa-solid fa-plane-lock", "fa-solid fa-plane-circle-xmark", "fa-solid fa-plane-circle-exclamation", "fa-solid fa-plane-circle-check", "fa-solid fa-plane-arrival", "fa-solid fa-pizza-slice", "fa-solid fa-pills", "fa-solid fa-piggy-bank", "fa-solid fa-photo-film", "fa-solid fa-phone-slash", "fa-solid fa-phone-flip", "fa-solid fa-peso-sign", "fa-solid fa-peseta-sign", "fa-solid fa-person-walking-with-cane", "fa-solid fa-person-walking-luggage", "fa-solid fa-person-walking-dashed-line-arrow-right", "fa-solid fa-person-walking-arrow-right", "fa-solid fa-person-walking-arrow-loop-left", "fa-solid fa-person-walking", "fa-solid fa-person-through-window", "fa-solid fa-person-swimming", "fa-solid fa-person-snowboarding", "fa-solid fa-person-skiing-nordic", "fa-solid fa-person-skiing", "fa-solid fa-person-skating", "fa-solid fa-person-shelter", "fa-solid fa-person-running", "fa-solid fa-person-rifle", "fa-solid fa-person-rays", "fa-solid fa-person-pregnant", "fa-solid fa-person-praying", "fa-solid fa-person-military-to-person", "fa-solid fa-person-military-rifle", "fa-solid fa-person-military-pointing", "fa-solid fa-person-hiking", "fa-solid fa-person-harassing", "fa-solid fa-person-half-dress", "fa-solid fa-person-falling-burst", "fa-solid fa-person-falling", "fa-solid fa-person-drowning", "fa-solid fa-person-dress-burst", "fa-solid fa-person-dots-from-line", "fa-solid fa-person-digging", "fa-solid fa-person-circle-xmark", "fa-solid fa-person-circle-question", "fa-solid fa-person-circle-plus", "fa-solid fa-person-circle-minus", "fa-solid fa-person-circle-exclamation", "fa-solid fa-person-circle-check", "fa-solid fa-person-chalkboard", "fa-solid fa-person-cane", "fa-solid fa-person-burst", "fa-solid fa-person-breastfeeding", "fa-solid fa-person-booth", "fa-solid fa-person-biking", "fa-solid fa-person-arrow-up-from-line", "fa-solid fa-person-arrow-down-to-line", "fa-solid fa-pepper-hot", "fa-solid fa-people-roof", "fa-solid fa-people-robbery", "fa-solid fa-people-pulling", "fa-solid fa-people-line", "fa-solid fa-people-group", "fa-solid fa-people-carry-box", "fa-solid fa-pen-ruler", "fa-solid fa-pen-clip", "fa-solid fa-peace", "fa-solid fa-paw", "fa-solid fa-paste", "fa-solid fa-paragraph", "fa-solid fa-parachute-box", "fa-solid fa-panorama", "fa-solid fa-pallet", "fa-solid fa-paintbrush", "fa-solid fa-pager", "fa-solid fa-p", "fa-solid fa-outdent", "fa-solid fa-om", "fa-solid fa-oil-well", "fa-solid fa-oil-can", "fa-solid fa-object-ungroup", "fa-solid fa-object-group", "fa-solid fa-o", "fa-solid fa-note-sticky", "fa-solid fa-notdef", "fa-solid fa-neuter", "fa-solid fa-naira-sign", "fa-solid fa-n", "fa-solid fa-mountain-city", "fa-solid fa-mountain", "fa-solid fa-mound", "fa-solid fa-mosquito-net", "fa-solid fa-mosquito", "fa-solid fa-mosque", "fa-solid fa-mortar-pestle", "fa-solid fa-monument", "fa-solid fa-money-check-dollar", "fa-solid fa-money-check", "fa-solid fa-money-bills", "fa-solid fa-money-bill-wheat", "fa-solid fa-money-bill-wave", "fa-solid fa-money-bill-trend-up", "fa-solid fa-money-bill-transfer", "fa-solid fa-money-bill-1-wave", "fa-solid fa-money-bill-1", "fa-solid fa-mobile-screen-button", "fa-solid fa-mobile-screen", "fa-solid fa-mobile-retro", "fa-solid fa-mobile-button", "fa-solid fa-mitten", "fa-solid fa-minimize", "fa-solid fa-mill-sign", "fa-solid fa-microscope", "fa-solid fa-microphone-lines-slash", "fa-solid fa-microphone-lines", "fa-solid fa-meteor", "fa-solid fa-message", "fa-solid fa-mercury", "fa-solid fa-menorah", "fa-solid fa-memory", "fa-solid fa-maximize", "fa-solid fa-mattress-pillow", "fa-solid fa-masks-theater", "fa-solid fa-mask-ventilator", "fa-solid fa-mask-face", "fa-solid fa-martini-glass-empty", "fa-solid fa-martini-glass-citrus", "fa-solid fa-martini-glass", "fa-solid fa-mars-stroke-up", "fa-solid fa-mars-stroke-right", "fa-solid fa-mars-stroke", "fa-solid fa-mars-double", "fa-solid fa-mars-and-venus-burst", "fa-solid fa-mars-and-venus", "fa-solid fa-mars", "fa-solid fa-map-pin", "fa-solid fa-map-location-dot", "fa-solid fa-map-location", "fa-solid fa-map", "fa-solid fa-manat-sign", "fa-solid fa-magnifying-glass-plus", "fa-solid fa-magnifying-glass-minus", "fa-solid fa-magnifying-glass-location", "fa-solid fa-magnifying-glass-dollar", "fa-solid fa-magnifying-glass-chart", "fa-solid fa-magnifying-glass-arrow-right", "fa-solid fa-m", "fa-solid fa-lungs-virus", "fa-solid fa-lungs", "fa-solid fa-locust", "fa-solid fa-lock-open", "fa-solid fa-location-pin-lock", "fa-solid fa-location-crosshairs", "fa-solid fa-location-arrow", "fa-solid fa-litecoin-sign", "fa-solid fa-list-ul", "fa-solid fa-list-ol", "fa-solid fa-list-check", "fa-solid fa-lira-sign", "fa-solid fa-link-slash", "fa-solid fa-lines-leaning", "fa-solid fa-life-ring", "fa-solid fa-less-than-equal", "fa-solid fa-less-than", "fa-solid fa-left-right", "fa-solid fa-left-long", "fa-solid fa-lari-sign", "fa-solid fa-laptop-medical", "fa-solid fa-laptop-file", "fa-solid fa-laptop-code", "fa-solid fa-landmark-flag", "fa-solid fa-landmark-dome", "fa-solid fa-land-mine-on", "fa-solid fa-l", "fa-solid fa-kitchen-set", "fa-solid fa-kit-medical", "fa-solid fa-kip-sign", "fa-solid fa-khanda", "fa-solid fa-kaaba", "fa-solid fa-k", "fa-solid fa-jug-detergent", "fa-solid fa-jet-fighter-up", "fa-solid fa-jet-fighter", "fa-solid fa-jedi", "fa-solid fa-jar-wheat", "fa-solid fa-jar", "fa-solid fa-j", "fa-solid fa-italic", "fa-solid fa-infinity", "fa-solid fa-indian-rupee-sign", "fa-solid fa-indent", "fa-solid fa-image-portrait", "fa-solid fa-igloo", "fa-solid fa-id-card-clip", "fa-solid fa-id-card", "fa-solid fa-id-badge", "fa-solid fa-icicles", "fa-solid fa-ice-cream", "fa-solid fa-i", "fa-solid fa-hurricane", "fa-solid fa-hryvnia-sign", "fa-solid fa-house-user", "fa-solid fa-house-tsunami", "fa-solid fa-house-signal", "fa-solid fa-house-medical-flag", "fa-solid fa-house-medical-circle-xmark", "fa-solid fa-house-medical-circle-exclamation", "fa-solid fa-house-medical-circle-check", "fa-solid fa-house-medical", "fa-solid fa-house-lock", "fa-solid fa-house-laptop", "fa-solid fa-house-flood-water-circle-arrow-right", "fa-solid fa-house-flood-water", "fa-solid fa-house-flag", "fa-solid fa-house-fire", "fa-solid fa-house-crack", "fa-solid fa-house-circle-xmark", "fa-solid fa-house-circle-exclamation", "fa-solid fa-house-circle-check", "fa-solid fa-house-chimney-window", "fa-solid fa-house-chimney-user", "fa-solid fa-house-chimney-medical", "fa-solid fa-house-chimney-crack", "fa-solid fa-house-chimney", "fa-solid fa-hourglass-half", "fa-solid fa-hourglass-end", "fa-solid fa-hourglass", "fa-solid fa-hotdog", "fa-solid fa-hot-tub-person", "fa-solid fa-hospital-user", "fa-solid fa-horse-head", "fa-solid fa-horse", "fa-solid fa-holly-berry", "fa-solid fa-hockey-puck", "fa-solid fa-hill-rockslide", "fa-solid fa-hill-avalanche", "fa-solid fa-highlighter", "fa-solid fa-helmet-un", "fa-solid fa-helmet-safety", "fa-solid fa-helicopter-symbol", "fa-solid fa-helicopter", "fa-solid fa-heart-pulse", "fa-solid fa-heart-crack", "fa-solid fa-heart-circle-xmark", "fa-solid fa-heart-circle-plus", "fa-solid fa-heart-circle-minus", "fa-solid fa-heart-circle-exclamation", "fa-solid fa-heart-circle-check", "fa-solid fa-heart-circle-bolt", "fa-solid fa-headphones-simple", "fa-solid fa-head-side-virus", "fa-solid fa-head-side-mask", "fa-solid fa-head-side-cough-slash", "fa-solid fa-head-side-cough", "fa-solid fa-hat-wizard", "fa-solid fa-hat-cowboy-side", "fa-solid fa-hat-cowboy", "fa-solid fa-hard-drive", "fa-solid fa-hanukiah", "fa-solid fa-handshake-simple-slash", "fa-solid fa-handshake-simple", "fa-solid fa-handshake-angle", "fa-solid fa-hands-praying", "fa-solid fa-hands-holding-circle", "fa-solid fa-hands-holding-child", "fa-solid fa-hands-holding", "fa-solid fa-hands-clapping", "fa-solid fa-hands-bubbles", "fa-solid fa-hands-bound", "fa-solid fa-hands-asl-interpreting", "fa-solid fa-handcuffs", "fa-solid fa-hand-spock", "fa-solid fa-hand-sparkles", "fa-solid fa-hand-scissors", "fa-solid fa-hand-pointer", "fa-solid fa-hand-point-right", "fa-solid fa-hand-point-left", "fa-solid fa-hand-point-down", "fa-solid fa-hand-peace", "fa-solid fa-hand-middle-finger", "fa-solid fa-hand-lizard", "fa-solid fa-hand-holding-medical", "fa-solid fa-hand-holding-hand", "fa-solid fa-hand-holding-droplet", "fa-solid fa-hand-holding-dollar", "fa-solid fa-hand-holding", "fa-solid fa-hand-fist", "fa-solid fa-hand-dots", "fa-solid fa-hand-back-fist", "fa-solid fa-hamsa", "fa-solid fa-h", "fa-solid fa-gun", "fa-solid fa-guitar", "fa-solid fa-guarani-sign", "fa-solid fa-group-arrows-rotate", "fa-solid fa-grip-vertical", "fa-solid fa-grip-lines-vertical", "fa-solid fa-grip-lines", "fa-solid fa-grip", "fa-solid fa-greater-than-equal", "fa-solid fa-greater-than", "fa-solid fa-graduation-cap", "fa-solid fa-golf-ball-tee", "fa-solid fa-glass-water-droplet", "fa-solid fa-glass-water", "fa-solid fa-gifts", "fa-solid fa-genderless", "fa-solid fa-gem", "fa-solid fa-gavel", "fa-solid fa-gauge-simple-high", "fa-solid fa-gauge-simple", "fa-solid fa-gauge-high", "fa-solid fa-gas-pump", "fa-solid fa-g", "fa-solid fa-futbol", "fa-solid fa-frog", "fa-solid fa-franc-sign", "fa-solid fa-forward-step", "fa-solid fa-forward-fast", "fa-solid fa-football", "fa-solid fa-font-awesome", "fa-solid fa-folder-tree", "fa-solid fa-folder-plus", "fa-solid fa-folder-minus", "fa-solid fa-folder-closed", "fa-solid fa-florin-sign", "fa-solid fa-floppy-disk", "fa-solid fa-flask-vial", "fa-solid fa-flag-usa", "fa-solid fa-fish-fins", "fa-solid fa-fire-flame-simple", "fa-solid fa-fire-flame-curved", "fa-solid fa-fire-extinguisher", "fa-solid fa-fire-burner", "fa-solid fa-filter-circle-xmark", "fa-solid fa-filter-circle-dollar", "fa-solid fa-fill-drip", "fa-solid fa-fill", "fa-solid fa-file-zipper", "fa-solid fa-file-waveform", "fa-solid fa-file-video", "fa-solid fa-file-signature", "fa-solid fa-file-shield", "fa-solid fa-file-prescription", "fa-solid fa-file-powerpoint", "fa-solid fa-file-pen", "fa-solid fa-file-medical", "fa-solid fa-file-lines", "fa-solid fa-file-invoice-dollar", "fa-solid fa-file-image", "fa-solid fa-file-csv", "fa-solid fa-file-code", "fa-solid fa-file-circle-xmark", "fa-solid fa-file-circle-question", "fa-solid fa-file-circle-plus", "fa-solid fa-file-circle-minus", "fa-solid fa-file-circle-exclamation", "fa-solid fa-file-circle-check", "fa-solid fa-file-audio", "fa-solid fa-file-arrow-up", "fa-solid fa-file-arrow-down", "fa-solid fa-ferry", "fa-solid fa-feather-pointed", "fa-solid fa-fax", "fa-solid fa-faucet-drip", "fa-solid fa-faucet", "fa-solid fa-fan", "fa-solid fa-face-tired", "fa-solid fa-face-surprise", "fa-solid fa-face-smile-wink", "fa-solid fa-face-smile-beam", "fa-solid fa-face-sad-tear", "fa-solid fa-face-sad-cry", "fa-solid fa-face-rolling-eyes", "fa-solid fa-face-meh-blank", "fa-solid fa-face-meh", "fa-solid fa-face-laugh-wink", "fa-solid fa-face-laugh-squint", "fa-solid fa-face-laugh-beam", "fa-solid fa-face-laugh", "fa-solid fa-face-kiss-wink-heart", "fa-solid fa-face-kiss-beam", "fa-solid fa-face-kiss", "fa-solid fa-face-grin-wink", "fa-solid fa-face-grin-wide", "fa-solid fa-face-grin-tongue-wink", "fa-solid fa-face-grin-tongue-squint", "fa-solid fa-face-grin-tongue", "fa-solid fa-face-grin-tears", "fa-solid fa-face-grin-stars", "fa-solid fa-face-grin-squint-tears", "fa-solid fa-face-grin-squint", "fa-solid fa-face-grin-hearts", "fa-solid fa-face-grin-beam-sweat", "fa-solid fa-face-grin-beam", "fa-solid fa-face-grin", "fa-solid fa-face-grimace", "fa-solid fa-face-frown-open", "fa-solid fa-face-frown", "fa-solid fa-face-flushed", "fa-solid fa-face-dizzy", "fa-solid fa-face-angry", "fa-solid fa-f", "fa-solid fa-eye-low-vision", "fa-solid fa-eye-dropper", "fa-solid fa-explosion", "fa-solid fa-euro-sign", "fa-solid fa-ethernet", "fa-solid fa-equals", "fa-solid fa-envelopes-bulk", "fa-solid fa-envelope-open-text", "fa-solid fa-envelope-open", "fa-solid fa-envelope-circle-check", "fa-solid fa-ellipsis-vertical", "fa-solid fa-ellipsis", "fa-solid fa-elevator", "fa-solid fa-eject", "fa-solid fa-egg", "fa-solid fa-earth-oceania", "fa-solid fa-earth-europe", "fa-solid fa-earth-asia", "fa-solid fa-earth-africa", "fa-solid fa-ear-listen", "fa-solid fa-ear-deaf", "fa-solid fa-e", "fa-solid fa-dungeon", "fa-solid fa-dumpster", "fa-solid fa-drumstick-bite", "fa-solid fa-drum-steelpan", "fa-solid fa-drum", "fa-solid fa-droplet-slash", "fa-solid fa-draw-polygon", "fa-solid fa-down-long", "fa-solid fa-down-left-and-up-right-to-center", "fa-solid fa-dove", "fa-solid fa-door-closed", "fa-solid fa-dong-sign", "fa-solid fa-dolly", "fa-solid fa-dog", "fa-solid fa-dna", "fa-solid fa-divide", "fa-solid fa-display", "fa-solid fa-disease", "fa-solid fa-dice-two", "fa-solid fa-dice-three", "fa-solid fa-dice-six", "fa-solid fa-dice-one", "fa-solid fa-dice-four", "fa-solid fa-dice-five", "fa-solid fa-dice-d6", "fa-solid fa-dice-d20", "fa-solid fa-diamond-turn-right", "fa-solid fa-diagram-successor", "fa-solid fa-diagram-project", "fa-solid fa-diagram-predecessor", "fa-solid fa-diagram-next", "fa-solid fa-dharmachakra", "fa-solid fa-democrat", "fa-solid fa-delete-left", "fa-solid fa-d", "fa-solid fa-cubes-stacked", "fa-solid fa-cubes", "fa-solid fa-cruzeiro-sign", "fa-solid fa-crutch", "fa-solid fa-crow", "fa-solid fa-crop-simple", "fa-solid fa-crop", "fa-solid fa-cow", "fa-solid fa-couch", "fa-solid fa-cookie", "fa-solid fa-computer-mouse", "fa-solid fa-computer", "fa-solid fa-compress", "fa-solid fa-compass-drafting", "fa-solid fa-compact-disc", "fa-solid fa-comment-sms", "fa-solid fa-comment-slash", "fa-solid fa-comment-medical", "fa-solid fa-comment-dots", "fa-solid fa-comment-dollar", "fa-solid fa-colon-sign", "fa-solid fa-code-pull-request", "fa-solid fa-code-merge", "fa-solid fa-code-fork", "fa-solid fa-code-commit", "fa-solid fa-clover", "fa-solid fa-cloud-sun-rain", "fa-solid fa-cloud-sun", "fa-solid fa-cloud-showers-water", "fa-solid fa-cloud-showers-heavy", "fa-solid fa-cloud-rain", "fa-solid fa-cloud-moon-rain", "fa-solid fa-cloud-moon", "fa-solid fa-cloud-meatball", "fa-solid fa-cloud-bolt", "fa-solid fa-cloud-arrow-down", "fa-solid fa-clock-rotate-left", "fa-solid fa-clipboard-user", "fa-solid fa-clipboard-question", "fa-solid fa-clipboard-list", "fa-solid fa-clipboard-check", "fa-solid fa-clapperboard", "fa-solid fa-circle-stop", "fa-solid fa-circle-right", "fa-solid fa-circle-radiation", "fa-solid fa-circle-question", "fa-solid fa-circle-plus", "fa-solid fa-circle-play", "fa-solid fa-circle-pause", "fa-solid fa-circle-nodes", "fa-solid fa-circle-minus", "fa-solid fa-circle-left", "fa-solid fa-circle-h", "fa-solid fa-circle-dot", "fa-solid fa-circle-dollar-to-slot", "fa-solid fa-circle-chevron-up", "fa-solid fa-circle-chevron-right", "fa-solid fa-circle-chevron-left", "fa-solid fa-circle-chevron-down", "fa-solid fa-circle-arrow-up", "fa-solid fa-circle-arrow-right", "fa-solid fa-circle-arrow-left", "fa-solid fa-circle-arrow-down", "fa-solid fa-children", "fa-solid fa-child-reaching", "fa-solid fa-child-dress", "fa-solid fa-child-combatant", "fa-solid fa-chevron-right", "fa-solid fa-chevron-left", "fa-solid fa-chess-rook", "fa-solid fa-chess-queen", "fa-solid fa-chess-pawn", "fa-solid fa-chess-knight", "fa-solid fa-chess-king", "fa-solid fa-chess-board", "fa-solid fa-chess-bishop", "fa-solid fa-chess", "fa-solid fa-cheese", "fa-solid fa-check-to-slot", "fa-solid fa-check-double", "fa-solid fa-chart-pie", "fa-solid fa-chart-line", "fa-solid fa-chart-gantt", "fa-solid fa-chart-column", "fa-solid fa-chart-bar", "fa-solid fa-chart-area", "fa-solid fa-charging-station", "fa-solid fa-champagne-glasses", "fa-solid fa-chalkboard-user", "fa-solid fa-cent-sign", "fa-solid fa-cedi-sign", "fa-solid fa-cat", "fa-solid fa-cart-flatbed-suitcase", "fa-solid fa-cart-flatbed", "fa-solid fa-cart-arrow-down", "fa-solid fa-carrot", "fa-solid fa-caret-right", "fa-solid fa-caret-left", "fa-solid fa-caravan", "fa-solid fa-car-tunnel", "fa-solid fa-car-rear", "fa-solid fa-car-on", "fa-solid fa-car-burst", "fa-solid fa-car-battery", "fa-solid fa-capsules", "fa-solid fa-cannabis", "fa-solid fa-candy-cane", "fa-solid fa-campground", "fa-solid fa-camera-rotate", "fa-solid fa-calendar-xmark", "fa-solid fa-calendar-plus", "fa-solid fa-calendar-minus", "fa-solid fa-calendar-day", "fa-solid fa-calendar-check", "fa-solid fa-cake-candles", "fa-solid fa-c", "fa-solid fa-bus-simple", "fa-solid fa-bus", "fa-solid fa-burst", "fa-solid fa-burger", "fa-solid fa-bullhorn", "fa-solid fa-building-wheat", "fa-solid fa-building-user", "fa-solid fa-building-un", "fa-solid fa-building-shield", "fa-solid fa-building-ngo", "fa-solid fa-building-lock", "fa-solid fa-building-flag", "fa-solid fa-building-columns", "fa-solid fa-building-circle-xmark", "fa-solid fa-building-circle-exclamation", "fa-solid fa-building-circle-check", "fa-solid fa-building-circle-arrow-right", "fa-solid fa-bugs", "fa-solid fa-bug-slash", "fa-solid fa-bucket", "fa-solid fa-broom-ball", "fa-solid fa-broom", "fa-solid fa-briefcase-medical", "fa-solid fa-bridge-water", "fa-solid fa-bridge-lock", "fa-solid fa-bridge-circle-xmark", "fa-solid fa-bridge-circle-exclamation", "fa-solid fa-bridge-circle-check", "fa-solid fa-bridge", "fa-solid fa-bread-slice", "fa-solid fa-brazilian-real-sign", "fa-solid fa-braille", "fa-solid fa-boxes-stacked", "fa-solid fa-boxes-packing", "fa-solid fa-box-tissue", "fa-solid fa-box-open", "fa-solid fa-box-archive", "fa-solid fa-box", "fa-solid fa-bowling-ball", "fa-solid fa-bowl-rice", "fa-solid fa-bowl-food", "fa-solid fa-bottle-water", "fa-solid fa-bottle-droplet", "fa-solid fa-bore-hole", "fa-solid fa-border-top-left", "fa-solid fa-border-all", "fa-solid fa-book-tanakh", "fa-solid fa-book-skull", "fa-solid fa-book-quran", "fa-solid fa-book-open-reader", "fa-solid fa-book-open", "fa-solid fa-book-medical", "fa-solid fa-book-journal-whills", "fa-solid fa-book-bookmark", "fa-solid fa-book-bible", "fa-solid fa-book-atlas", "fa-solid fa-bong", "fa-solid fa-bone", "fa-solid fa-bolt-lightning", "fa-solid fa-bold", "fa-solid fa-blender-phone", "fa-solid fa-blender", "fa-solid fa-bitcoin-sign", "fa-solid fa-biohazard", "fa-solid fa-bezier-curve", "fa-solid fa-bell-slash", "fa-solid fa-bell-concierge", "fa-solid fa-beer-mug-empty", "fa-solid fa-bed-pulse", "fa-solid fa-bed", "fa-solid fa-battery-three-quarters", "fa-solid fa-battery-quarter", "fa-solid fa-battery-half", "fa-solid fa-battery-full", "fa-solid fa-battery-empty", "fa-solid fa-basketball", "fa-solid fa-basket-shopping", "fa-solid fa-baseball-bat-ball", "fa-solid fa-baseball", "fa-solid fa-bars-staggered", "fa-solid fa-bars-progress", "fa-solid fa-bangladeshi-taka-sign", "fa-solid fa-bandage", "fa-solid fa-ban-smoking", "fa-solid fa-ban", "fa-solid fa-baht-sign", "fa-solid fa-bahai", "fa-solid fa-bacterium", "fa-solid fa-bacteria", "fa-solid fa-bacon", "fa-solid fa-backward-step", "fa-solid fa-backward-fast", "fa-solid fa-baby-carriage", "fa-solid fa-b", "fa-solid fa-austral-sign", "fa-solid fa-atom", "fa-solid fa-at", "fa-solid fa-asterisk", "fa-solid fa-arrows-up-to-line", "fa-solid fa-arrows-up-down-left-right", "fa-solid fa-arrows-up-down", "fa-solid fa-arrows-turn-to-dots", "fa-solid fa-arrows-turn-right", "fa-solid fa-arrows-to-eye", "fa-solid fa-arrows-to-dot", "fa-solid fa-arrows-to-circle", "fa-solid fa-arrows-split-up-and-left", "fa-solid fa-arrows-spin", "fa-solid fa-arrows-rotate", "fa-solid fa-arrows-left-right-to-line", "fa-solid fa-arrows-left-right", "fa-solid fa-arrows-down-to-people", "fa-solid fa-arrows-down-to-line", "fa-solid fa-arrow-up-z-a", "fa-solid fa-arrow-up-wide-short", "fa-solid fa-arrow-up-short-wide", "fa-solid fa-arrow-up-right-dots", "fa-solid fa-arrow-up-long", "fa-solid fa-arrow-up-from-water-pump", "fa-solid fa-arrow-up-from-ground-water", "fa-solid fa-arrow-up-a-z", "fa-solid fa-arrow-up-9-1", "fa-solid fa-arrow-up-1-9", "fa-solid fa-arrow-turn-up", "fa-solid fa-arrow-turn-down", "fa-solid fa-arrow-trend-up", "fa-solid fa-arrow-trend-down", "fa-solid fa-arrow-rotate-right", "fa-solid fa-arrow-rotate-left", "fa-solid fa-arrow-right-to-city", "fa-solid fa-arrow-right-to-bracket", "fa-solid fa-arrow-right-long", "fa-solid fa-arrow-right-from-bracket", "fa-solid fa-arrow-right-arrow-left", "fa-solid fa-arrow-pointer", "fa-solid fa-arrow-left-long", "fa-solid fa-arrow-down-z-a", "fa-solid fa-arrow-down-wide-short", "fa-solid fa-arrow-down-up-lock", "fa-solid fa-arrow-down-up-across-line", "fa-solid fa-arrow-down-short-wide", "fa-solid fa-arrow-down-long", "fa-solid fa-arrow-down-a-z", "fa-solid fa-arrow-down-9-1", "fa-solid fa-arrow-down-1-9", "fa-solid fa-archway", "fa-solid fa-apple-whole", "fa-solid fa-ankh", "fa-solid fa-angles-up", "fa-solid fa-angles-right", "fa-solid fa-angles-left", "fa-solid fa-angles-down", "fa-solid fa-angle-right", "fa-solid fa-angle-left", "fa-solid fa-angle-down", "fa-solid fa-anchor-lock", "fa-solid fa-anchor-circle-xmark", "fa-solid fa-anchor-circle-exclamation", "fa-solid fa-anchor-circle-check", "fa-solid fa-align-right", "fa-solid fa-align-left", "fa-solid fa-align-justify", "fa-solid fa-align-center", "fa-solid fa-a", "fa-solid fa-9", "fa-solid fa-8", "fa-solid fa-7", "fa-solid fa-6", "fa-solid fa-5", "fa-solid fa-4", "fa-solid fa-3", "fa-solid fa-2", "fa-solid fa-1", "fa-solid fa-0", "fa-brands fa-zhihu", "fa-brands fa-yoast", "fa-brands fa-yelp", "fa-brands fa-yarn", "fa-brands fa-yandex-international", "fa-brands fa-yandex", "fa-brands fa-yammer", "fa-brands fa-yahoo", "fa-brands fa-y-combinator", "fa-brands fa-xing", "fa-brands fa-xbox", "fa-brands fa-x-twitter", "fa-brands fa-wpressr", "fa-brands fa-wpforms", "fa-brands fa-wpexplorer", "fa-brands fa-wpbeginner", "fa-brands fa-wordpress-simple", "fa-brands fa-wolf-pack-battalion", "fa-brands fa-wodu", "fa-brands fa-wizards-of-the-coast", "fa-brands fa-wirsindhandwerk", "fa-brands fa-whmcs", "fa-brands fa-weixin", "fa-brands fa-weibo", "fa-brands fa-weebly", "fa-brands fa-webflow", "fa-brands fa-web-awesome", "fa-brands fa-watchman-monitoring", "fa-brands fa-vuejs", "fa-brands fa-vnv", "fa-brands fa-vk", "fa-brands fa-vine", "fa-brands fa-vimeo-v", "fa-brands fa-viber", "fa-brands fa-viadeo", "fa-brands fa-viacoin", "fa-brands fa-vaadin", "fa-brands fa-ussunnah", "fa-brands fa-usb", "fa-brands fa-upwork", "fa-brands fa-ups", "fa-brands fa-untappd", "fa-brands fa-unsplash", "fa-brands fa-unity", "fa-brands fa-uniregistry", "fa-brands fa-uncharted", "fa-brands fa-umbraco", "fa-brands fa-uikit", "fa-brands fa-ubuntu", "fa-brands fa-uber", "fa-brands fa-typo3", "fa-brands fa-tumblr", "fa-brands fa-trello", "fa-brands fa-trade-federation", "fa-brands fa-threads", "fa-brands fa-themeisle", "fa-brands fa-themeco", "fa-brands fa-the-red-yeti", "fa-brands fa-tencent-weibo", "fa-brands fa-symfony", "fa-brands fa-swift", "fa-brands fa-suse", "fa-brands fa-supple", "fa-brands fa-superpowers", "fa-brands fa-stumbleupon-circle", "fa-brands fa-stumbleupon", "fa-brands fa-studiovinari", "fa-brands fa-stubber", "fa-brands fa-stripe-s", "fa-brands fa-strava", "fa-brands fa-sticker-mule", "fa-brands fa-steam-symbol", "fa-brands fa-steam", "fa-brands fa-staylinked", "fa-brands fa-stackpath", "fa-brands fa-stack-exchange", "fa-brands fa-square-xing", "fa-brands fa-square-x-twitter", "fa-brands fa-square-whatsapp", "fa-brands fa-square-web-awesome-stroke", "fa-brands fa-square-web-awesome", "fa-brands fa-square-vimeo", "fa-brands fa-square-viadeo", "fa-brands fa-square-upwork", "fa-brands fa-square-tumblr", "fa-brands fa-square-threads", "fa-brands fa-square-steam", "fa-brands fa-square-snapchat", "fa-brands fa-square-reddit", "fa-brands fa-square-pied-piper", "fa-brands fa-square-odnoklassniki", "fa-brands fa-square-letterboxd", "fa-brands fa-square-lastfm", "fa-brands fa-square-instagram", "fa-brands fa-square-hacker-news", "fa-brands fa-square-google-plus", "fa-brands fa-square-gitlab", "fa-brands fa-square-github", "fa-brands fa-square-git", "fa-brands fa-square-font-awesome-stroke", "fa-brands fa-square-font-awesome", "fa-brands fa-square-facebook", "fa-brands fa-square-dribbble", "fa-brands fa-square-behance", "fa-brands fa-speaker-deck", "fa-brands fa-speakap", "fa-brands fa-space-awesome", "fa-brands fa-sourcetree", "fa-brands fa-snapchat", "fa-brands fa-slideshare", "fa-brands fa-skyatlas", "fa-brands fa-sketch", "fa-brands fa-sitrox", "fa-brands fa-sith", "fa-brands fa-sistrix", "fa-brands fa-simplybuilt", "fa-brands fa-signal-messenger", "fa-brands fa-shopware", "fa-brands fa-shoelace", "fa-brands fa-shirtsinbulk", "fa-brands fa-servicestack", "fa-brands fa-sellsy", "fa-brands fa-sellcast", "fa-brands fa-searchengin", "fa-brands fa-scribd", "fa-brands fa-screenpal", "fa-brands fa-schlix", "fa-brands fa-sass", "fa-brands fa-safari", "fa-brands fa-rust", "fa-brands fa-rockrms", "fa-brands fa-rocketchat", "fa-brands fa-rev", "fa-brands fa-resolving", "fa-brands fa-researchgate", "fa-brands fa-replyd", "fa-brands fa-renren", "fa-brands fa-redhat", "fa-brands fa-reddit-alien", "fa-brands fa-reddit", "fa-brands fa-red-river", "fa-brands fa-reacteurope", "fa-brands fa-ravelry", "fa-brands fa-raspberry-pi", "fa-brands fa-r-project", "fa-brands fa-quora", "fa-brands fa-quinscape", "fa-brands fa-qq", "fa-brands fa-pushed", "fa-brands fa-pixiv", "fa-brands fa-pix", "fa-brands fa-pinterest-p", "fa-brands fa-pied-piper-pp", "fa-brands fa-pied-piper-hat", "fa-brands fa-pied-piper-alt", "fa-brands fa-php", "fa-brands fa-phoenix-squadron", "fa-brands fa-phoenix-framework", "fa-brands fa-phabricator", "fa-brands fa-periscope", "fa-brands fa-perbyte", "fa-brands fa-patreon", "fa-brands fa-palfed", "fa-brands fa-page4", "fa-brands fa-padlet", "fa-brands fa-osi", "fa-brands fa-orcid", "fa-brands fa-optin-monster", "fa-brands fa-opera", "fa-brands fa-opensuse", "fa-brands fa-opencart", "fa-brands fa-old-republic", "fa-brands fa-odysee", "fa-brands fa-odnoklassniki", "fa-brands fa-octopus-deploy", "fa-brands fa-nutritionix", "fa-brands fa-ns8", "fa-brands fa-npm", "fa-brands fa-node-js", "fa-brands fa-nimblr", "fa-brands fa-nfc-symbol", "fa-brands fa-nfc-directional", "fa-brands fa-neos", "fa-brands fa-napster", "fa-brands fa-monero", "fa-brands fa-modx", "fa-brands fa-mizuni", "fa-brands fa-mixer", "fa-brands fa-mixcloud", "fa-brands fa-mix", "fa-brands fa-mintbit", "fa-brands fa-microblog", "fa-brands fa-meta", "fa-brands fa-mendeley", "fa-brands fa-megaport", "fa-brands fa-medrt", "fa-brands fa-medapps", "fa-brands fa-mdb", "fa-brands fa-maxcdn", "fa-brands fa-mastodon", "fa-brands fa-markdown", "fa-brands fa-mandalorian", "fa-brands fa-mailchimp", "fa-brands fa-magento", "fa-brands fa-lyft", "fa-brands fa-linode", "fa-brands fa-linkedin-in", "fa-brands fa-letterboxd", "fa-brands fa-less", "fa-brands fa-leanpub", "fa-brands fa-lastfm", "fa-brands fa-laravel", "fa-brands fa-korvue", "fa-brands fa-kickstarter-k", "fa-brands fa-keycdn", "fa-brands fa-keybase", "fa-brands fa-kaggle", "fa-brands fa-jxl", "fa-brands fa-jsfiddle", "fa-brands fa-js", "fa-brands fa-joomla", "fa-brands fa-joget", "fa-brands fa-jira", "fa-brands fa-jenkins", "fa-brands fa-jedi-order", "fa-brands fa-itunes-note", "fa-brands fa-itunes", "fa-brands fa-itch-io", "fa-brands fa-ioxhost", "fa-brands fa-invision", "fa-brands fa-instalod", "fa-brands fa-imdb", "fa-brands fa-hubspot", "fa-brands fa-houzz", "fa-brands fa-hotjar", "fa-brands fa-hornbill", "fa-brands fa-hooli", "fa-brands fa-hive", "fa-brands fa-hire-a-helper", "fa-brands fa-hips", "fa-brands fa-hashnode", "fa-brands fa-hackerrank", "fa-brands fa-hacker-news", "fa-brands fa-gulp", "fa-brands fa-guilded", "fa-brands fa-grunt", "fa-brands fa-gripfire", "fa-brands fa-grav", "fa-brands fa-gratipay", "fa-brands fa-google-wallet", "fa-brands fa-google-scholar", "fa-brands fa-google-plus-g", "fa-brands fa-google-plus", "fa-brands fa-google-pay", "fa-brands fa-google-drive", "fa-brands fa-goodreads", "fa-brands fa-golang", "fa-brands fa-gofore", "fa-brands fa-glide", "fa-brands fa-gitter", "fa-brands fa-gitkraken", "fa-brands fa-github-alt", "fa-brands fa-git-alt", "fa-brands fa-git", "fa-brands fa-gg-circle", "fa-brands fa-gg", "fa-brands fa-get-pocket", "fa-brands fa-galactic-senate", "fa-brands fa-galactic-republic", "fa-brands fa-fulcrum", "fa-brands fa-freebsd", "fa-brands fa-foursquare", "fa-brands fa-forumbee", "fa-brands fa-fort-awesome-alt", "fa-brands fa-fort-awesome", "fa-brands fa-fonticons-fi", "fa-brands fa-fonticons", "fa-brands fa-font-awesome", "fa-brands fa-flipboard", "fa-brands fa-flickr", "fa-brands fa-firstdraft", "fa-brands fa-first-order-alt", "fa-brands fa-first-order", "fa-brands fa-firefox-browser", "fa-brands fa-firefox", "fa-brands fa-fedora", "fa-brands fa-fedex", "fa-brands fa-fantasy-flight-games", "fa-brands fa-facebook-f", "fa-brands fa-expeditedssl", "fa-brands fa-evernote", "fa-brands fa-ethereum", "fa-brands fa-erlang", "fa-brands fa-envira", "fa-brands fa-empire", "fa-brands fa-ember", "fa-brands fa-ello", "fa-brands fa-edge-legacy", "fa-brands fa-edge", "fa-brands fa-ebay", "fa-brands fa-earlybirds", "fa-brands fa-dyalog", "fa-brands fa-drupal", "fa-brands fa-draft2digital", "fa-brands fa-dochub", "fa-brands fa-digital-ocean", "fa-brands fa-digg", "fa-brands fa-diaspora", "fa-brands fa-dhl", "fa-brands fa-deviantart", "fa-brands fa-dev", "fa-brands fa-deskpro", "fa-brands fa-deploydog", "fa-brands fa-delicious", "fa-brands fa-deezer", "fa-brands fa-debian", "fa-brands fa-dailymotion", "fa-brands fa-d-and-d-beyond", "fa-brands fa-d-and-d", "fa-brands fa-cuttlefish", "fa-brands fa-css3-alt", "fa-brands fa-css3", "fa-brands fa-critical-role", "fa-brands fa-creative-commons-zero", "fa-brands fa-creative-commons-share", "fa-brands fa-creative-commons-sampling-plus", "fa-brands fa-creative-commons-sampling", "fa-brands fa-creative-commons-sa", "fa-brands fa-creative-commons-remix", "fa-brands fa-creative-commons-pd-alt", "fa-brands fa-creative-commons-pd", "fa-brands fa-creative-commons-nd", "fa-brands fa-creative-commons-nc-jp", "fa-brands fa-creative-commons-nc-eu", "fa-brands fa-creative-commons-nc", "fa-brands fa-creative-commons-by", "fa-brands fa-creative-commons", "fa-brands fa-cpanel", "fa-brands fa-cotton-bureau", "fa-brands fa-contao", "fa-brands fa-connectdevelop", "fa-brands fa-confluence", "fa-brands fa-codiepie", "fa-brands fa-cmplid", "fa-brands fa-cloudversify", "fa-brands fa-cloudsmith", "fa-brands fa-cloudscale", "fa-brands fa-chromecast", "fa-brands fa-chrome", "fa-brands fa-centos", "fa-brands fa-centercode", "fa-brands fa-cc-stripe", "fa-brands fa-cc-paypal", "fa-brands fa-cc-jcb", "fa-brands fa-cc-discover", "fa-brands fa-cc-diners-club", "fa-brands fa-cc-apple-pay", "fa-brands fa-cc-amex", "fa-brands fa-cc-amazon-pay", "fa-brands fa-canadian-maple-leaf", "fa-brands fa-buysellads", "fa-brands fa-buy-n-large", "fa-brands fa-buromobelexperte", "fa-brands fa-buffer", "fa-brands fa-btc", "fa-brands fa-brave-reverse", "fa-brands fa-brave", "fa-brands fa-bots", "fa-brands fa-bootstrap", "fa-brands fa-bluetooth-b", "fa-brands fa-bluetooth", "fa-brands fa-bluesky", "fa-brands fa-blogger-b", "fa-brands fa-blogger", "fa-brands fa-blackberry", "fa-brands fa-black-tie", "fa-brands fa-bity", "fa-brands fa-bitcoin", "fa-brands fa-bitbucket", "fa-brands fa-bimobject", "fa-brands fa-bilibili", "fa-brands fa-battle-net", "fa-brands fa-bandcamp", "fa-brands fa-aws", "fa-brands fa-aviato", "fa-brands fa-avianex", "fa-brands fa-autoprefixer", "fa-brands fa-audible", "fa-brands fa-asymmetrik", "fa-brands fa-artstation", "fa-brands fa-apple-pay", "fa-brands fa-apper", "fa-brands fa-app-store-ios", "fa-brands fa-app-store", "fa-brands fa-angular", "fa-brands fa-angrycreative", "fa-brands fa-angellist", "fa-brands fa-amilia", "fa-brands fa-amazon-pay", "fa-brands fa-alipay", "fa-brands fa-affiliatetheme", "fa-brands fa-adversal", "fa-brands fa-adn", "fa-brands fa-accusoft", "fa-brands fa-500px", "fa-brands fa-42-group", "fa-regular fa-window-minimize", "fa-regular fa-window-maximize", "fa-regular fa-trash-can", "fa-regular fa-star-half-stroke", "fa-regular fa-star-half", "fa-regular fa-square-plus", "fa-regular fa-square-full", "fa-regular fa-square-caret-up", "fa-regular fa-square-caret-right", "fa-regular fa-square-caret-left", "fa-regular fa-square-caret-down", "fa-regular fa-rectangle-xmark", "fa-regular fa-rectangle-list", "fa-regular fa-paste", "fa-regular fa-object-ungroup", "fa-regular fa-object-group", "fa-regular fa-note-sticky", "fa-regular fa-money-bill-1", "fa-regular fa-message", "fa-regular fa-map", "fa-regular fa-life-ring", "fa-regular fa-id-card", "fa-regular fa-id-badge", "fa-regular fa-hourglass-half", "fa-regular fa-hourglass", "fa-regular fa-hard-drive", "fa-regular fa-hand-spock", "fa-regular fa-hand-scissors", "fa-regular fa-hand-pointer", "fa-regular fa-hand-point-right", "fa-regular fa-hand-point-left", "fa-regular fa-hand-point-down", "fa-regular fa-hand-peace", "fa-regular fa-hand-lizard", "fa-regular fa-hand-back-fist", "fa-regular fa-gem", "fa-regular fa-futbol", "fa-regular fa-font-awesome", "fa-regular fa-folder-closed", "fa-regular fa-floppy-disk", "fa-regular fa-file-zipper", "fa-regular fa-file-video", "fa-regular fa-file-powerpoint", "fa-regular fa-file-lines", "fa-regular fa-file-image", "fa-regular fa-file-code", "fa-regular fa-file-audio", "fa-regular fa-face-tired", "fa-regular fa-face-surprise", "fa-regular fa-face-smile-wink", "fa-regular fa-face-smile-beam", "fa-regular fa-face-sad-tear", "fa-regular fa-face-sad-cry", "fa-regular fa-face-rolling-eyes", "fa-regular fa-face-meh-blank", "fa-regular fa-face-meh", "fa-regular fa-face-laugh-wink", "fa-regular fa-face-laugh-squint", "fa-regular fa-face-laugh-beam", "fa-regular fa-face-laugh", "fa-regular fa-face-kiss-wink-heart", "fa-regular fa-face-kiss-beam", "fa-regular fa-face-kiss", "fa-regular fa-face-grin-wink", "fa-regular fa-face-grin-wide", "fa-regular fa-face-grin-tongue-wink", "fa-regular fa-face-grin-tongue-squint", "fa-regular fa-face-grin-tongue", "fa-regular fa-face-grin-tears", "fa-regular fa-face-grin-stars", "fa-regular fa-face-grin-squint-tears", "fa-regular fa-face-grin-squint", "fa-regular fa-face-grin-hearts", "fa-regular fa-face-grin-beam-sweat", "fa-regular fa-face-grin-beam", "fa-regular fa-face-grin", "fa-regular fa-face-grimace", "fa-regular fa-face-frown-open", "fa-regular fa-face-frown", "fa-regular fa-face-flushed", "fa-regular fa-face-dizzy", "fa-regular fa-face-angry", "fa-regular fa-envelope-open", "fa-regular fa-comment-dots", "fa-regular fa-circle-stop", "fa-regular fa-circle-right", "fa-regular fa-circle-question", "fa-regular fa-circle-play", "fa-regular fa-circle-pause", "fa-regular fa-circle-left", "fa-regular fa-circle-dot", "fa-regular fa-chess-rook", "fa-regular fa-chess-queen", "fa-regular fa-chess-pawn", "fa-regular fa-chess-knight", "fa-regular fa-chess-king", "fa-regular fa-chess-bishop", "fa-regular fa-chart-bar", "fa-regular fa-calendar-xmark", "fa-regular fa-calendar-plus", "fa-regular fa-calendar-minus", "fa-regular fa-calendar-check", "fa-regular fa-bell-slash"];

/***/ }),

/***/ "./src/custom-control/dimension.js":
/*!*****************************************!*\
  !*** ./src/custom-control/dimension.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_responsive_view_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/responsive-view-icons */ "./src/components/responsive-view-icons.js");
/* harmony import */ var _components_size_unit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/size-unit */ "./src/components/size-unit.js");
/* harmony import */ var _components_input_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/input-group */ "./src/components/input-group.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers */ "./src/helpers/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants */ "./src/constants.js");




/* Custom components */





/* Others */

const DimensionControl = props => {
  const {
    label,
    onChange = () => {}
  } = props;
  const getData = () => {
    const {
      value = {}
    } = props;
    const {
      values,
      ...defaultDimensionValueRest
    } = _constants__WEBPACK_IMPORTED_MODULE_7__.defaultDimensionValue;
    const data = {
      ...defaultDimensionValueRest,
      ...value
    };
    const {
      properties,
      responsiveViews
    } = data;
    return {
      ...data,
      values: value.values ? getViewData(properties, data.values, responsiveViews) : getViewData(properties, values, responsiveViews)
    };
  };
  const getViewData = (properties, responsiveValues, responsiveViews) => {
    let viewData = {};
    responsiveViews.forEach((v, i) => {
      let value = responsiveValues[v];
      let currentValue = properties.map((p, i) => value && value.length - 1 >= i ? value[i] : 0);
      viewData = {
        ...viewData,
        [v]: currentValue
      };
    });
    return viewData;
  };
  const handleChange = (name, data) => {
    const oldData = getData();
    const {
      isLinkActive,
      values
    } = oldData;
    let newData = {};
    if ("updateValues" === name) {
      let {
        index,
        value
      } = data;
      newData = (0,_helpers__WEBPACK_IMPORTED_MODULE_6__.merge)({}, oldData, {
        values: {
          [activeView]: isLinkActive ? values[activeView].map(() => parseInt(value)) : values[activeView].map((v, i) => index === i ? parseInt(value) : v)
        }
      });
    } else if ("updateLink" === name) {
      newData = (0,_helpers__WEBPACK_IMPORTED_MODULE_6__.merge)({}, oldData, {
        isLinkActive: !isLinkActive
      });
    } else if ("updateUnit" === name) {
      newData = (0,_helpers__WEBPACK_IMPORTED_MODULE_6__.merge)({}, oldData, {
        activeUnit: data
      });
    }
    onChange(newData);
  };
  const reset = () => {
    const {
      defaultValue
    } = props;
    defaultValue && onChange(defaultValue);
  };
  const {
    responsiveViews,
    isLinkActive,
    activeUnit,
    units,
    values,
    properties
  } = getData();
  const activeView = (0,_helpers__WEBPACK_IMPORTED_MODULE_6__.getPreviewDevice)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${_constants__WEBPACK_IMPORTED_MODULE_7__.prefix}-dimension-input`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${_constants__WEBPACK_IMPORTED_MODULE_7__.prefix}-label-section`
  }, label && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    // The inline styling is used here instead of the CSS file because
    // This styling is only required in this specific case.
    style: {
      maxWidth: "45%"
    },
    className: "components-base-control__label"
  }, label), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_responsive_view_icons__WEBPACK_IMPORTED_MODULE_3__["default"], {
    responsiveViews: responsiveViews,
    activeView: activeView,
    onClick: view => {
      onChange(getData());
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_size_unit__WEBPACK_IMPORTED_MODULE_4__["default"], {
    units: units,
    activeUnit: activeUnit,
    onClick: unit => handleChange("updateUnit", unit)
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${_constants__WEBPACK_IMPORTED_MODULE_7__.prefix}-controller`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${_constants__WEBPACK_IMPORTED_MODULE_7__.prefix}-lists`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_input_group__WEBPACK_IMPORTED_MODULE_5__["default"], {
    property: properties,
    isLinkActive: isLinkActive,
    updateLinkState: () => handleChange("updateLink"),
    type: "number",
    lists: values[activeView],
    onChange: (i, v) => handleChange("updateValues", {
      index: i,
      value: v
    })
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${_constants__WEBPACK_IMPORTED_MODULE_7__.prefix}-btn-reset-wrapper`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: reset,
    className: `is-button is-default is-small`
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Reset", "gutentools"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DimensionControl);
(0,_helpers__WEBPACK_IMPORTED_MODULE_6__.globalize)("DimensionControl", DimensionControl);

/***/ }),

/***/ "./src/custom-control/index.js":
/*!*************************************!*\
  !*** ./src/custom-control/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BackgroundOverlayControl: () => (/* binding */ BackgroundOverlayControl),
/* harmony export */   BackgroundPosition: () => (/* binding */ BackgroundPosition),
/* harmony export */   BackgroundRepeat: () => (/* binding */ BackgroundRepeat),
/* harmony export */   BackgroundSize: () => (/* binding */ BackgroundSize),
/* harmony export */   BgControl: () => (/* binding */ BgControl),
/* harmony export */   BorderControl: () => (/* binding */ BorderControl),
/* harmony export */   BorderStyleControl: () => (/* binding */ BorderStyleControl),
/* harmony export */   BorderWidthControl: () => (/* binding */ BorderWidthControl),
/* harmony export */   ColorControl: () => (/* binding */ ColorControl),
/* harmony export */   ExcerptLengthControl: () => (/* binding */ ExcerptLengthControl),
/* harmony export */   FixedBackgroundColor: () => (/* binding */ FixedBackgroundColor),
/* harmony export */   FontSizeControl: () => (/* binding */ FontSizeControl),
/* harmony export */   HeadingTagControl: () => (/* binding */ HeadingTagControl),
/* harmony export */   HtmlTagControl: () => (/* binding */ HtmlTagControl),
/* harmony export */   ImageSizeControl: () => (/* binding */ ImageSizeControl),
/* harmony export */   ItemPerRowControl: () => (/* binding */ ItemPerRowControl),
/* harmony export */   LinkControl: () => (/* binding */ LinkControl),
/* harmony export */   OpacityControl: () => (/* binding */ OpacityControl),
/* harmony export */   PanelColor: () => (/* binding */ PanelColor),
/* harmony export */   RadiusControl: () => (/* binding */ RadiusControl),
/* harmony export */   SpacingControl: () => (/* binding */ SpacingControl),
/* harmony export */   SwitchControl: () => (/* binding */ SwitchControl),
/* harmony export */   ThicknessControl: () => (/* binding */ ThicknessControl),
/* harmony export */   WidthControl: () => (/* binding */ WidthControl)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers */ "./src/helpers/index.js");






const ItemPerRowControl = ({
  label,
  onChange,
  ...rest
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
  label: label ? label : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Number of Items per Row", "gutentools"),
  type: "number",
  min: 1,
  max: 4,
  onChange: perRow => onChange(parseInt(perRow)),
  __nextHasNoMarginBottom: true,
  __next40pxDefaultSize: true,
  ...rest
});
const HeadingTagControl = ({
  label,
  ...rest
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
  label: label ? label : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Tag", "gutentools"),
  options: [{
    label: "H1",
    value: "h1"
  }, {
    label: "H2",
    value: "h2"
  }, {
    label: "H3",
    value: "h3"
  }, {
    label: "H4",
    value: "h4"
  }, {
    label: "H5",
    value: "h5"
  }, {
    label: "H6",
    value: "h6"
  }, {
    label: "Span",
    value: "span"
  }, {
    label: "P",
    value: "p"
  }],
  __nextHasNoMarginBottom: true,
  __next40pxDefaultSize: true,
  ...rest
});
const HtmlTagControl = ({
  label,
  ...rest
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
  label: label ? label : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Tag", "gutentools"),
  options: [{
    label: "H1",
    value: "h1"
  }, {
    label: "div",
    value: "div"
  }, {
    label: "p",
    value: "p"
  }],
  __nextHasNoMarginBottom: true,
  __next40pxDefaultSize: true,
  ...rest
});
const BackgroundPosition = ({
  label,
  onChange,
  ...rest
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
  label: label || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Background Position", "gutentools"),
  options: _constants__WEBPACK_IMPORTED_MODULE_4__.backgroundPosition,
  onChange: backgroundPosition => onChange(backgroundPosition),
  __nextHasNoMarginBottom: true,
  __next40pxDefaultSize: true,
  ...rest
});
const BackgroundRepeat = ({
  label,
  onChange,
  ...rest
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
  label: label || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Background Repeat", "gutentools"),
  options: _constants__WEBPACK_IMPORTED_MODULE_4__.backgroundRepeat,
  onChange: backgroundRepeat => onChange(backgroundRepeat),
  __nextHasNoMarginBottom: true,
  __next40pxDefaultSize: true,
  ...rest
});
const BackgroundSize = ({
  label,
  onChange,
  ...rest
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
  label: label || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Background Size", "gutentools"),
  options: _constants__WEBPACK_IMPORTED_MODULE_4__.backgroundSize,
  onChange: backgroundSize => onChange(backgroundSize),
  __nextHasNoMarginBottom: true,
  __next40pxDefaultSize: true,
  ...rest
});
const FontSizeControl = ({
  label,
  allowReset = true,
  ...rest
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
  label: label === false ? false : label ? label : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Font Size", "gutentools"),
  allowReset: allowReset,
  min: 10,
  max: 100,
  beforeIcon: "editor-textcolor",
  __nextHasNoMarginBottom: true,
  __next40pxDefaultSize: true,
  ...rest
});
const ThicknessControl = props => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Thickness", "gutentools"),
  allowReset: true,
  min: 1,
  max: 50,
  __nextHasNoMarginBottom: true,
  __next40pxDefaultSize: true,
  ...props
});
const BorderWidthControl = props => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Border Width", "gutentools"),
  allowReset: true,
  min: 0,
  max: 50,
  __nextHasNoMarginBottom: true,
  __next40pxDefaultSize: true,
  ...props
});
const WidthControl = props => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Width", "gutentools"),
  allowReset: true,
  min: 1,
  max: 120,
  __nextHasNoMarginBottom: true,
  __next40pxDefaultSize: true,
  ...props
});
const OpacityControl = ({
  label,
  ...rest
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
  label: label ? label : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Opacity", "gutentools"),
  allowReset: true,
  step: 0.1,
  min: 0,
  max: 1,
  __nextHasNoMarginBottom: true,
  __next40pxDefaultSize: true,
  ...rest
});
const SpacingControl = ({
  label,
  beforeIcon,
  ...rest
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
  label: label ? label : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Spacing", "gutentools"),
  beforeIcon: beforeIcon ? beforeIcon : "arrow-down-alt",
  allowReset: true,
  min: 0,
  max: 100,
  __nextHasNoMarginBottom: true,
  __next40pxDefaultSize: true,
  ...rest
});
const ColorControl = ({
  label,
  hideIndicator,
  ...rest
}) => {
  const colors = (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.combinedColors)();
  const color = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
    className: "editor-color-palette-control__color-palette",
    colors: colors,
    ...rest
  });
  let indicator = false;
  if (hideIndicator) {
    return color;
  } else {
    indicator = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, label ? label : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Color", "gutentools"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorIndicator, {
      colorValue: rest.value
    }));
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
      label: indicator,
      __nextHasNoMarginBottom: true
    }, color);
  }
};
const BackgroundOverlayControl = ({
  label,
  onChange,
  value,
  ...rest
}) => {
  const indicator = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, label ? label : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Background Overlay", "gutentools"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorIndicator, {
    colorValue: value
  }));
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.BaseControl, {
    label: indicator,
    __nextHasNoMarginBottom: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPicker, {
    color: value,
    onChangeComplete: ({
      rgb
    }) => onChange(`rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a} )`),
    ...rest
  }));
};
const BgControl = ({
  label,
  ...rest
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
  label: label ? label : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Background Type", "gutentools"),
  options: [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Image", "gutentools"),
    value: "image"
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Color", "gutentools"),
    value: "color"
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Gradient", "gutentools"),
    value: "gradient"
  }],
  __nextHasNoMarginBottom: true,
  __next40pxDefaultSize: true,
  ...rest
});
const BorderControl = ({
  label,
  ...rest
}) => {
  const colors = (0,_helpers__WEBPACK_IMPORTED_MODULE_5__.combinedColors)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalBorderBoxControl, {
    colors: colors,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Borders"),
    ...rest
  });
};
const ImageSizeControl = ({
  label,
  ...rest
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
  label: label ? label : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Image Size", "gutentools"),
  options: Gutentools_VAR.image_size.filter(v => "medium_large" != v).map(v => ({
    label: v,
    value: v
  })),
  __nextHasNoMarginBottom: true,
  __next40pxDefaultSize: true,
  ...rest
});
const LinkControl = ({
  label,
  ...rest
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
  label: label ? label : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("URL", "gutentools"),
  type: "url",
  __nextHasNoMarginBottom: true,
  __next40pxDefaultSize: true,
  ...rest
});
const BorderStyleControl = ({
  label,
  ...rest
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
  label: label ? label : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Border Style", "gutentools"),
  options: [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("None", "gutentools"),
    value: "none"
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Solid", "gutentools"),
    value: "solid"
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Dashed", "gutentools"),
    value: "dashed"
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Double", "gutentools"),
    value: "double"
  }, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Dotted", "gutentools"),
    value: "dotted"
  }],
  __nextHasNoMarginBottom: true,
  __next40pxDefaultSize: true,
  ...rest
});
const RadiusControl = ({
  label,
  ...rest
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
  label: label ? label : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Icon Radius", "gutentools"),
  allowReset: true,
  min: 0,
  max: 50,
  __nextHasNoMarginBottom: true,
  __next40pxDefaultSize: true,
  ...rest
});
const SwitchControl = params => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
  __nextHasNoMarginBottom: true,
  ...params
});
const ExcerptLengthControl = ({
  label,
  ...rest
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
  label: label ? label : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Excerpt Length", "gutentools"),
  allowReset: true,
  min: 1,
  max: 60,
  initialPosition: 20,
  __nextHasNoMarginBottom: true,
  __next40pxDefaultSize: true,
  ...rest
});
const PanelColor = ({
  children,
  ...rest
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Color", "gutentools"),
  initialOpen: false,
  colors: _constants__WEBPACK_IMPORTED_MODULE_4__.colors,
  ...rest
});
const FixedBackgroundColor = ({
  label,
  ...rest
}) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SwitchControl, {
  label: label ? label : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Fixed Background", "gutentools"),
  ...rest
});

/***/ }),

/***/ "./src/custom-control/responsive-range-wrapper.js":
/*!********************************************************!*\
  !*** ./src/custom-control/responsive-range-wrapper.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_responsive_range_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/responsive-range-control */ "./src/components/responsive-range-control.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./src/constants.js");





const ResponsiveRangeWrapperControl = props => {
  const onChange = (name, data) => {
    props.onChange(data);
  };
  const reset = () => {
    const {
      onChange,
      defaultValue
    } = props;
    defaultValue && onChange(defaultValue);
  };
  const {
    value,
    defaultValue,
    step = "1",
    beforeIcon = "editor-textcolor"
  } = props;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_responsive_range_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "fontSize",
    step: step,
    responsiveViews: _constants__WEBPACK_IMPORTED_MODULE_4__.defaultResponsiveViews,
    value: value,
    onChange: onChange,
    label: props.label,
    beforeIcon: beforeIcon
  }), defaultValue && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${_constants__WEBPACK_IMPORTED_MODULE_4__.prefix}-btn-reset-wrapper`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    onClick: reset,
    className: `is-button is-default is-small`
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Reset", "gutentools"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResponsiveRangeWrapperControl);

/***/ }),

/***/ "./src/helpers/index.js":
/*!******************************!*\
  !*** ./src/helpers/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addWrapperClass: () => (/* binding */ addWrapperClass),
/* harmony export */   capitalize: () => (/* binding */ capitalize),
/* harmony export */   classnames: () => (/* binding */ classnames),
/* harmony export */   combinedColors: () => (/* binding */ combinedColors),
/* harmony export */   downloadAsJsonFile: () => (/* binding */ downloadAsJsonFile),
/* harmony export */   exportToJsonFile: () => (/* binding */ exportToJsonFile),
/* harmony export */   findIndex: () => (/* binding */ findIndex),
/* harmony export */   getArray: () => (/* binding */ getArray),
/* harmony export */   getClass: () => (/* binding */ getClass),
/* harmony export */   getClassName: () => (/* binding */ getClassName),
/* harmony export */   getDefaultAttr: () => (/* binding */ getDefaultAttr),
/* harmony export */   getDimensionStyle: () => (/* binding */ getDimensionStyle),
/* harmony export */   getInnerBlocks: () => (/* binding */ getInnerBlocks),
/* harmony export */   getInnerBlocksCount: () => (/* binding */ getInnerBlocksCount),
/* harmony export */   getLocalImage: () => (/* binding */ getLocalImage),
/* harmony export */   getParentAttrs: () => (/* binding */ getParentAttrs),
/* harmony export */   getPayload: () => (/* binding */ getPayload),
/* harmony export */   getPreviewDevice: () => (/* binding */ getPreviewDevice),
/* harmony export */   getResponsiveRangeVal: () => (/* binding */ getResponsiveRangeVal),
/* harmony export */   getTypoStyle: () => (/* binding */ getTypoStyle),
/* harmony export */   globalize: () => (/* binding */ globalize),
/* harmony export */   has: () => (/* binding */ has),
/* harmony export */   innerBlocksLimit: () => (/* binding */ innerBlocksLimit),
/* harmony export */   insertableBlocks: () => (/* binding */ insertableBlocks),
/* harmony export */   isPro: () => (/* binding */ isPro),
/* harmony export */   isSiteEditor: () => (/* binding */ isSiteEditor),
/* harmony export */   isUndefined: () => (/* binding */ isUndefined),
/* harmony export */   merge: () => (/* binding */ merge),
/* harmony export */   pickBy: () => (/* binding */ pickBy),
/* harmony export */   register: () => (/* binding */ register),
/* harmony export */   setColWidth: () => (/* binding */ setColWidth),
/* harmony export */   setInitialAttrs: () => (/* binding */ setInitialAttrs),
/* harmony export */   setPreviewDevice: () => (/* binding */ setPreviewDevice),
/* harmony export */   shouldShowAddButton: () => (/* binding */ shouldShowAddButton),
/* harmony export */   shouldShowUpgrader: () => (/* binding */ shouldShowUpgrader),
/* harmony export */   union: () => (/* binding */ union),
/* harmony export */   wordTrim: () => (/* binding */ wordTrim)
/* harmony export */ });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/has */ "./node_modules/lodash/has.js");
/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_has__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/isUndefined */ "./node_modules/lodash/isUndefined.js");
/* harmony import */ var lodash_isUndefined__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_isUndefined__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_pickBy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/pickBy */ "./node_modules/lodash/pickBy.js");
/* harmony import */ var lodash_pickBy__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_pickBy__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash/union */ "./node_modules/lodash/union.js");
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_union__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_findIndex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash/findIndex */ "./node_modules/lodash/findIndex.js");
/* harmony import */ var lodash_findIndex__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_findIndex__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash/merge */ "./node_modules/lodash/merge.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_13__);








const {
  applyFilters
} = (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.createHooks)();







const isUndefined = (lodash_isUndefined__WEBPACK_IMPORTED_MODULE_8___default());
const pickBy = (lodash_pickBy__WEBPACK_IMPORTED_MODULE_9___default());
const has = (lodash_has__WEBPACK_IMPORTED_MODULE_7___default());
const union = (lodash_union__WEBPACK_IMPORTED_MODULE_10___default());
const findIndex = (lodash_findIndex__WEBPACK_IMPORTED_MODULE_11___default());
const merge = (lodash_merge__WEBPACK_IMPORTED_MODULE_12___default());

const classnames = (classnames__WEBPACK_IMPORTED_MODULE_13___default());
const insertableBlocks = [];
const register = (name, payload, prefix = "gutentools") => {
  if (!payload.supports || payload.supports && payload.supports.inserter === true) {
    insertableBlocks.push(name);
  }
  (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(name, getPayload(payload));
};
const globalize = (name, component) => {
  if (isUndefined(wp.gutenTools)) {
    wp.gutenTools = {};
  }
  wp.gutenTools[name] = component;
};
const wordTrim = (sentence, amount, tail = "...") => {
  const words = isUndefined(sentence) ? "" : sentence.split(" ");
  if (amount >= words.length) {
    return sentence;
  }
  const truncated = words.slice(0, amount);
  return `${truncated.join(" ")}${tail}`;
};
const capitalize = s => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};
const getPayload = ({
  icon,
  category,
  ...rest
}) => ({
  ...rest,
  icon: icon ? icon : "universal-access-alt",
  category: category ? category : "gutentools"
});
const getArray = (count = 1, value = 0, isArray = false) => {
  if (isArray) {
    return value;
  } else {
    return new Array(parseInt(count > 0 ? count : 1)).fill(value);
  }
};
const getClass = cls => `${_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}-${cls}`;
const isSiteEditor = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const param = urlParams.get("postType");
  return param == "wp_template";
};
const getPreviewDevice = () => {
  if (wp.data.select("core/editor") && wp.data.select("core/editor").getDeviceType) {
    return wp.data.select("core/editor").getDeviceType().toLowerCase();
  }
  if (isSiteEditor()) {
    return wp.data.select("core/edit-site").__experimentalGetPreviewDeviceType().toLowerCase();
  }
  return wp.data.select("core/edit-post").__experimentalGetPreviewDeviceType().toLowerCase();
};
const setPreviewDevice = view => {
  if ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.dispatch)("core/editor") && (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.dispatch)("core/editor").setDeviceType) {
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.dispatch)("core/editor").setDeviceType(capitalize(view));
    return;
  }
  if (isSiteEditor()) {
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.dispatch)("core/edit-site")?.__experimentalSetPreviewDeviceType(capitalize(view));
  } else {
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.dispatch)("core/edit-post")?.__experimentalSetPreviewDeviceType(capitalize(view));
  }
};
const getTypoStyle = typo => {
  if (!typo) return {};
  const {
    fontSize,
    fontFamily,
    fontWeight,
    lineHeight,
    textTransform
  } = typo;
  const device = getPreviewDevice();
  return {
    fontFamily,
    fontWeight,
    textTransform,
    lineHeight: lineHeight.values[device] + lineHeight.activeUnit,
    fontSize: fontSize.values[device] + fontSize.activeUnit
  };
};
const getDimensionStyle = (props, setting) => {
  const device = getPreviewDevice();
  if (props === "margin") {
    props = ["marginTop", "marginRight", "marginBottom", "marginLeft"];
  } else if (props === "padding") {
    props = ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"];
  } else if (props === "border-radius") {
    props = ["border-top-left-radius", "border-top-right-radius", "border-bottom-left-radius", "border-bottom-right-radius"];
  } else if (props === "position") {
    props = ["top", "right", "left", "bottom"];
  } else if (props === "size") {
    props = ["height", "width"];
  }
  if (!setting) return {};
  let style = {};
  const {
    values,
    activeUnit
  } = setting;
  props.map((v, k) => {
    style[v] = values[device][k] ? values[device][k] + activeUnit : values[device][k];
  });
  return style;
};
const getResponsiveRangeVal = data => {
  //backward coompatibility
  if (typeof data != "object") {
    data = {
      activeUnit: "",
      values: {
        desktop: data,
        tablet: data,
        mobile: data
      }
    };
  }
  const device = getPreviewDevice();
  const {
    activeUnit,
    values
  } = data;
  return values[device] + activeUnit;
};

/* For handle gutter of child blocks */
const getInnerBlocks = clientsId => (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.select)("core/block-editor").getBlocks(clientsId);
const setColWidth = (id, itemsPerRow, gutter, type = "parent", initGap = 0) => {
  const width = `calc( ${100 / itemsPerRow}% - ${gutter * (itemsPerRow - 1) / itemsPerRow}px)`;
  const margin = `${gutter / 2 + initGap}px 0`;
  const styleEle = $ele => {
    $ele.style.width = width;
    $ele.style.margin = margin;
  };
  if (type === "child") {
    const $ele = document.getElementById(`block-${id}`);
    $ele && styleEle($ele);
    return;
  }
  const innerBlocksId = getInnerBlocks(id).map(innerBlock => innerBlock.clientId);
  innerBlocksId.forEach(id => {
    const $ele = document.getElementById(`block-${id}`);
    $ele && styleEle($ele);
  });
};
const addWrapperClass = (clientId, className = "icon-blocks-wrapper") => {
  /* Add custom class into subblocks parent div for flex layout */
  const $ele = document.getElementById(`block-${clientId}`);
  const prefixClassName = `${_constants__WEBPACK_IMPORTED_MODULE_6__.prefix}-${className}`;
  if (!$ele) return;
  if (!$ele.parentElement.classList.contains(prefixClassName)) {
    $ele.parentElement.classList.add(prefixClassName);
  }
};
const getParentAttrs = props => {
  const {
    clientId
  } = props;
  const parentId = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.select)("core/block-editor").getBlockRootClientId(clientId);
  if (parentId) {
    const parentBlockDetail = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.select)("core/block-editor").getBlock(parentId);
    const {
      attributes
    } = parentBlockDetail;
    return attributes;
  }
  return false;
};
const setInitialAttrs = (props, editorNSaveAttrs) => {
  const {
    setAttributes
  } = props;
  const defaultAttr = {
    ...editorNSaveAttrs,
    isInit: true
  };
  setAttributes(defaultAttr);
};
const getInnerBlocksCount = clientId => {
  const blocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.select)("core/block-editor").getBlocksByClientId(clientId)[0];
  return blocks ? blocks.innerBlocks.length : 0;
};
const innerBlocksLimit = applyFilters("gtBlocksInnerBlockLimit", 4);
const shouldShowAddButton = clientId => clientId && getInnerBlocksCount(clientId) < innerBlocksLimit;
const shouldShowUpgrader = clientId => {
  const parentId = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.select)("core/block-editor").getBlockRootClientId(clientId);
  if (!parentId) {
    return false;
  }
  const blocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.select)("core/block-editor").getBlocksByClientId(parentId)[0].innerBlocks;
  const i = findIndex(blocks, {
    clientId
  });
  return i >= innerBlocksLimit;
};
const downloadAsJsonFile = (fileName, data) => {
  const json = JSON.stringify(data);
  const blob = new Blob([json], {
    type: "application/json"
  });
  const href = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = href;
  link.download = fileName + ".json";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
const getLocalImage = name => {
  return Gutentools_VAR.plugin_path + "img/" + name;
};
const isPro = () => Gutentools_VAR.is_pro == "1";
const exportToJsonFile = clientId => {
  const iterator = ({
    name,
    attributes,
    innerBlocks
  }) => {
    if (innerBlocks.length > 0) {
      return {
        name,
        attributes,
        inner: innerBlocks.map(child => iterator(child))
      };
    }
    return {
      name,
      attributes
    };
  };
  const blocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.select)("core/block-editor").getBlocksByClientId(clientId);
  const data = blocks.map(a => iterator(a));
  downloadAsJsonFile(blocks[0].name.replace("/", "-") + "-" + clientId, data);
};
const getClassName = name => name.split(" ")[0];
const getDefaultAttr = metadata => attr => metadata.attributes[attr].default;
const combinedColors = () => {
  const themeColors = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useSettings)("color.palette") || [];
  return [{
    colors: _constants__WEBPACK_IMPORTED_MODULE_6__.colors,
    name: "Gutentools"
  }, {
    colors: themeColors[0],
    name: "Theme"
  }];
};

/***/ }),

/***/ "./src/helpers/svg.js":
/*!****************************!*\
  !*** ./src/helpers/svg.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alignBottom: () => (/* binding */ alignBottom),
/* harmony export */   alignMiddle: () => (/* binding */ alignMiddle),
/* harmony export */   alignTop: () => (/* binding */ alignTop),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/constants.js");


const alignTop = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "24",
  height: "24",
  "aria-hidden": "true",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M9 20h6V9H9v11zM4 4v1.5h16V4H4z"
}));
const alignMiddle = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "24",
  height: "24",
  "aria-hidden": "true",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M20 11h-5V4H9v7H4v1.5h5V20h6v-7.5h5z"
}));
const alignBottom = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "24",
  height: "24",
  "aria-hidden": "true",
  focusable: "false"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M15 4H9v11h6V4zM4 18.5V20h16v-1.5H4z"
}));
const svg = {
  advancedHeading: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "128",
    height: "128",
    viewBox: "0 0 128 128"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 0 C1.33653625 -0.00945648 1.33653625 -0.00945648 2.70007324 -0.019104 C4.13921082 -0.01303131 4.13921082 -0.01303131 5.60742188 -0.00683594 C7.08861511 -0.00970612 7.08861511 -0.00970612 8.59973145 -0.01263428 C10.68774673 -0.01399543 12.7757705 -0.01030384 14.86376953 -0.00195312 C18.06366954 0.00874726 21.26300812 -0.00185088 24.46289062 -0.01464844 C26.49023562 -0.01332683 28.51758026 -0.01076441 30.54492188 -0.00683594 C31.50434692 -0.0108844 32.46377197 -0.01493286 33.45227051 -0.019104 C34.34329468 -0.01279968 35.23431885 -0.00649536 36.15234375 0 C37.32790833 0.00238678 37.32790833 0.00238678 38.52722168 0.00482178 C40.57617188 0.25878906 40.57617188 0.25878906 43.57617188 2.25878906 C43.97460938 5.44628906 43.97460938 5.44628906 43.95117188 9.25878906 C43.96277344 11.14597656 43.96277344 11.14597656 43.97460938 13.07128906 C43.843125 14.12316406 43.71164063 15.17503906 43.57617188 16.25878906 C40.57617188 18.25878906 40.57617188 18.25878906 30.57617188 18.25878906 C30.57617188 28.81878906 30.57617188 39.37878906 30.57617188 50.25878906 C47.07617188 50.25878906 63.57617188 50.25878906 80.57617188 50.25878906 C80.57617188 39.69878906 80.57617188 29.13878906 80.57617188 18.25878906 C77.27617188 18.25878906 73.97617188 18.25878906 70.57617188 18.25878906 C69.58617188 17.59878906 68.59617187 16.93878906 67.57617188 16.25878906 C67.17773438 13.07128906 67.17773438 13.07128906 67.20117188 9.25878906 C67.18957031 7.37160156 67.18957031 7.37160156 67.17773438 5.44628906 C67.30921875 4.39441406 67.44070312 3.34253906 67.57617188 2.25878906 C70.71124823 0.16873816 71.43133928 0.00724555 75 0 C76.33653625 -0.00945648 76.33653625 -0.00945648 77.70007324 -0.019104 C79.13921082 -0.01303131 79.13921082 -0.01303131 80.60742188 -0.00683594 C82.08861511 -0.00970612 82.08861511 -0.00970612 83.59973145 -0.01263428 C85.68774673 -0.01399543 87.7757705 -0.01030384 89.86376953 -0.00195312 C93.06366954 0.00874726 96.26300812 -0.00185088 99.46289062 -0.01464844 C101.49023562 -0.01332683 103.51758026 -0.01076441 105.54492188 -0.00683594 C106.50434692 -0.0108844 107.46377197 -0.01493286 108.45227051 -0.019104 C109.34329468 -0.01279968 110.23431885 -0.00649536 111.15234375 0 C112.32790833 0.00238678 112.32790833 0.00238678 113.52722168 0.00482178 C115.57617188 0.25878906 115.57617188 0.25878906 118.57617188 2.25878906 C118.97460938 5.44628906 118.97460938 5.44628906 118.95117188 9.25878906 C118.96277344 11.14597656 118.96277344 11.14597656 118.97460938 13.07128906 C118.843125 14.12316406 118.71164063 15.17503906 118.57617188 16.25878906 C115.57617188 18.25878906 115.57617188 18.25878906 105.57617188 18.25878906 C105.57617188 45.31878906 105.57617188 72.37878906 105.57617188 100.25878906 C108.87617187 100.25878906 112.17617187 100.25878906 115.57617188 100.25878906 C117.06117187 101.24878906 117.06117187 101.24878906 118.57617188 102.25878906 C118.97460938 105.44628906 118.97460938 105.44628906 118.95117188 109.25878906 C118.96277344 111.14597656 118.96277344 111.14597656 118.97460938 113.07128906 C118.77738281 114.64910156 118.77738281 114.64910156 118.57617188 116.25878906 C115.44109552 118.34883997 114.72100447 118.51033258 111.15234375 118.51757812 C110.26131958 118.52388245 109.37029541 118.53018677 108.45227051 118.53668213 C107.01313293 118.53060944 107.01313293 118.53060944 105.54492188 118.52441406 C104.06372864 118.52728424 104.06372864 118.52728424 102.5526123 118.5302124 C100.46459702 118.53157356 98.37657325 118.52788196 96.28857422 118.51953125 C93.08867421 118.50883087 89.88933563 118.519429 86.68945312 118.53222656 C84.66210813 118.53090496 82.63476349 118.52834254 80.60742188 118.52441406 C79.64799683 118.52846252 78.68857178 118.53251099 77.70007324 118.53668213 C76.80904907 118.53037781 75.9180249 118.52407349 75 118.51757812 C74.21629028 118.51598694 73.43258057 118.51439575 72.62512207 118.51275635 C70.57617188 118.25878906 70.57617188 118.25878906 67.57617188 116.25878906 C67.17773438 113.07128906 67.17773438 113.07128906 67.20117188 109.25878906 C67.18957031 107.37160156 67.18957031 107.37160156 67.17773438 105.44628906 C67.37496094 103.86847656 67.37496094 103.86847656 67.57617188 102.25878906 C70.57617188 100.25878906 70.57617188 100.25878906 80.57617188 100.25878906 C80.57617188 89.69878906 80.57617188 79.13878906 80.57617188 68.25878906 C64.07617188 68.25878906 47.57617188 68.25878906 30.57617188 68.25878906 C30.57617188 78.81878906 30.57617188 89.37878906 30.57617188 100.25878906 C33.87617187 100.25878906 37.17617188 100.25878906 40.57617188 100.25878906 C41.56617188 100.91878906 42.55617187 101.57878906 43.57617188 102.25878906 C43.97460938 105.44628906 43.97460938 105.44628906 43.95117188 109.25878906 C43.96277344 111.14597656 43.96277344 111.14597656 43.97460938 113.07128906 C43.77738281 114.64910156 43.77738281 114.64910156 43.57617188 116.25878906 C40.44109552 118.34883997 39.72100447 118.51033258 36.15234375 118.51757812 C35.26131958 118.52388245 34.37029541 118.53018677 33.45227051 118.53668213 C32.01313293 118.53060944 32.01313293 118.53060944 30.54492188 118.52441406 C29.06372864 118.52728424 29.06372864 118.52728424 27.5526123 118.5302124 C25.46459702 118.53157356 23.37657325 118.52788196 21.28857422 118.51953125 C18.08867421 118.50883087 14.88933563 118.519429 11.68945312 118.53222656 C9.66210813 118.53090496 7.63476349 118.52834254 5.60742188 118.52441406 C4.64799683 118.52846252 3.68857178 118.53251099 2.70007324 118.53668213 C1.80904907 118.53037781 0.9180249 118.52407349 0 118.51757812 C-0.78370972 118.51598694 -1.56741943 118.51439575 -2.37487793 118.51275635 C-4.42382813 118.25878906 -4.42382813 118.25878906 -7.42382812 116.25878906 C-7.82226562 113.07128906 -7.82226562 113.07128906 -7.79882812 109.25878906 C-7.8065625 108.00066406 -7.81429688 106.74253906 -7.82226562 105.44628906 C-7.62503906 103.86847656 -7.62503906 103.86847656 -7.42382812 102.25878906 C-4.42382812 100.25878906 -4.42382812 100.25878906 5.57617188 100.25878906 C5.57617188 73.19878906 5.57617188 46.13878906 5.57617188 18.25878906 C2.27617187 18.25878906 -1.02382813 18.25878906 -4.42382812 18.25878906 C-5.41382813 17.59878906 -6.40382813 16.93878906 -7.42382812 16.25878906 C-7.82226562 13.07128906 -7.82226562 13.07128906 -7.79882812 9.25878906 C-7.8065625 8.00066406 -7.81429688 6.74253906 -7.82226562 5.44628906 C-7.69078125 4.39441406 -7.55929688 3.34253906 -7.42382812 2.25878906 C-4.28875177 0.16873816 -3.56866072 0.00724555 0 0 Z ",
    fill: "#2A43FF",
    transform: "translate(8.423828125,4.7412109375)"
  })),
  container: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "128",
    height: "128",
    viewBox: "0 0 128 128"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 0 C1.97909398 -0.02686553 3.95828971 -0.04633375 5.9375 -0.0625 C7.03964844 -0.07410156 8.14179687 -0.08570312 9.27734375 -0.09765625 C12 0 12 0 13 1 C13.04080783 2.99958364 13.04254356 5.00045254 13 7 C14.14597656 7.36609375 15.29195313 7.7321875 16.47265625 8.109375 C20.96405699 9.60504224 25.38796971 11.26203509 29.80859375 12.953125 C30.8545018 13.35198914 30.8545018 13.35198914 31.92153931 13.75891113 C34.83997659 14.87256958 37.75788597 15.98739316 40.67163086 17.11328125 C42.81887645 17.9418187 44.96957784 18.76075265 47.12109375 19.578125 C47.78249863 19.83636047 48.4439035 20.09459595 49.12535095 20.36065674 C50.72934619 20.96567677 52.36313363 21.49057047 54 22 C54.99 21.505 54.99 21.505 56 21 C57.66444461 20.9044069 59.33281963 20.87015355 61 20.875 C61.886875 20.87242188 62.77375 20.86984375 63.6875 20.8671875 C66 21 66 21 68 22 C68 25.96 68 29.92 68 34 C66.68 34.33 65.36 34.66 64 35 C64 53.81 64 72.62 64 92 C65.98 92.495 65.98 92.495 68 93 C68.05391993 94.79133978 68.09275571 96.58313899 68.125 98.375 C68.14820312 99.37273437 68.17140625 100.37046875 68.1953125 101.3984375 C68 104 68 104 66 106 C63.6875 106.23046875 63.6875 106.23046875 61 106.1875 C59.6696875 106.17783203 59.6696875 106.17783203 58.3125 106.16796875 C56 106 56 106 54 105 C51.06243714 105.98305017 48.21811811 107.03839718 45.34375 108.18359375 C44.48567749 108.51794937 43.62760498 108.85230499 42.74353027 109.1967926 C39.99279688 110.26980686 37.24624394 111.35305253 34.5 112.4375 C31.75320922 113.51688758 29.0055984 114.59407628 26.25646973 115.66749573 C24.54329948 116.33695796 22.83158471 117.01015862 21.12145996 117.68736267 C20.34725708 117.99090164 19.5730542 118.29444061 18.77539062 118.60717773 C18.09303345 118.87666733 17.41067627 119.14615692 16.7076416 119.42381287 C15 120 15 120 13 120 C13.020625 120.804375 13.04125 121.60875 13.0625 122.4375 C13 125 13 125 12 126 C9.98035801 126.07244053 7.95832876 126.08377188 5.9375 126.0625 C4.83277344 126.05347656 3.72804687 126.04445313 2.58984375 126.03515625 C1.73519531 126.02355469 0.88054688 126.01195313 0 126 C-0.14695313 125.09048584 -0.29390625 124.18097168 -0.4453125 123.24389648 C-2.42931624 119.10422033 -4.12475062 118.59096135 -8.27392578 117.00758362 C-9.13228027 116.70730759 -9.99063477 116.40703156 -10.875 116.09765625 C-11.75526855 115.77083359 -12.63553711 115.44401093 -13.54248047 115.10728455 C-15.40132625 114.42196697 -17.26427464 113.74768996 -19.13085938 113.08374023 C-21.99756838 112.06336551 -24.85062376 111.01053893 -27.703125 109.95117188 C-29.50971393 109.28974407 -31.31698427 108.63017387 -33.125 107.97265625 C-33.98335449 107.6582106 -34.84170898 107.34376495 -35.72607422 107.01979065 C-36.52029785 106.73876999 -37.31452148 106.45774933 -38.1328125 106.16821289 C-38.83293457 105.91761612 -39.53305664 105.66701935 -40.25439453 105.40882874 C-42.09559813 104.78138626 -42.09559813 104.78138626 -44 106 C-45.66345582 106.12082534 -47.33220591 106.1753794 -49 106.1875 C-49.886875 106.20167969 -50.77375 106.21585937 -51.6875 106.23046875 C-54 106 -54 106 -56 104 C-56.1953125 101.3984375 -56.1953125 101.3984375 -56.125 98.375 C-56.10695312 97.37210937 -56.08890625 96.36921875 -56.0703125 95.3359375 C-56.04710937 94.56507812 -56.02390625 93.79421875 -56 93 C-54.02 92.505 -54.02 92.505 -52 92 C-52 73.19 -52 54.38 -52 35 C-53.32 34.67 -54.64 34.34 -56 34 C-56 30.04 -56 26.08 -56 22 C-53.51245214 20.75622607 -51.77344699 20.86693765 -49 20.875 C-48.113125 20.87242188 -47.22625 20.86984375 -46.3125 20.8671875 C-44 21 -44 21 -42 22 C-40.17038323 21.61324697 -40.17038323 21.61324697 -38.1328125 20.84765625 C-36.94147705 20.4309668 -36.94147705 20.4309668 -35.72607422 20.00585938 C-34.86771973 19.69455078 -34.00936523 19.38324219 -33.125 19.0625 C-32.24473145 18.74474609 -31.36446289 18.42699219 -30.45751953 18.09960938 C-28.59306315 17.42138486 -26.73030911 16.73846527 -24.86914062 16.05126953 C-22.02019148 15.00739827 -19.15949393 14.00175881 -16.296875 12.99609375 C-14.48872584 12.33306298 -12.68140393 11.66777096 -10.875 11 C-9.58746826 10.55732788 -9.58746826 10.55732788 -8.27392578 10.10571289 C-3.91117508 8.56244356 -3.91117508 8.56244356 -1.00878906 5.19140625 C-0.33865582 3.05874268 -0.33865582 3.05874268 0 0 Z M4 5 C4 6.32 4 7.64 4 9 C5.32 9 6.64 9 8 9 C8 7.68 8 6.36 8 5 C6.68 5 5.36 5 4 5 Z M-8.19702148 14.13989258 C-8.91393661 14.41380325 -9.63085175 14.68771393 -10.36949158 14.96992493 C-11.11252029 15.27504501 -11.85554901 15.5801651 -12.62109375 15.89453125 C-13.40646011 16.20194748 -14.19182648 16.50936371 -15.00099182 16.82609558 C-16.6471426 17.47437605 -18.28995057 18.13120397 -19.92944336 18.79614258 C-22.44759666 19.81659154 -24.97527428 20.80966397 -27.50585938 21.79882812 C-29.10738945 22.43333663 -30.7083239 23.06935105 -32.30859375 23.70703125 C-33.44439125 24.15560234 -33.44439125 24.15560234 -34.60313416 24.61323547 C-38.50462686 25.96347314 -38.50462686 25.96347314 -41 29 C-35.56500455 31.1969962 -30.12091996 33.36898612 -24.66699219 35.51855469 C-22.81370941 36.25299659 -20.96307494 36.99415862 -19.11523438 37.7421875 C-16.455931 38.81734671 -13.78798573 39.86784061 -11.1171875 40.9140625 C-9.88402298 41.42170639 -9.88402298 41.42170639 -8.62594604 41.93960571 C-7.8455899 42.24006805 -7.06523376 42.5405304 -6.26123047 42.85009766 C-5.58172333 43.12101227 -4.90221619 43.39192688 -4.20211792 43.67105103 C-1.30952336 44.27308038 -1.30952336 44.27308038 4 42 C4 32.76 4 23.52 4 14 C-2.64684769 12.80641797 -2.64684769 12.80641797 -8.19702148 14.13989258 Z M8 14 C8 23.24 8 32.48 8 42 C13.55752466 44.19487155 13.55752466 44.19487155 18.26123047 42.85009766 C19.04158661 42.54963531 19.82194275 42.24917297 20.62594604 41.93960571 C21.44805573 41.60117645 22.27016541 41.26274719 23.1171875 40.9140625 C23.97434357 40.57829193 24.83149963 40.24252136 25.71463013 39.89657593 C28.44205171 38.82351701 31.15825497 37.72477223 33.875 36.625 C35.72588195 35.89150953 37.57743835 35.15971854 39.4296875 34.4296875 C43.96117788 32.63939426 48.4827863 30.82599993 53 29 C49.97154069 25.69749536 46.53280304 24.41213455 42.41015625 22.86328125 C41.66922226 22.57897751 40.92828827 22.29467377 40.16490173 22.00175476 C38.60044391 21.40373623 37.03444617 20.80973281 35.46704102 20.21948242 C33.07065728 19.31557689 30.68068555 18.39609679 28.29101562 17.47460938 C26.76858736 16.89489178 25.24581195 16.31608486 23.72265625 15.73828125 C23.00900406 15.46333328 22.29535187 15.18838531 21.56007385 14.90510559 C16.50726013 13.01733241 13.29889661 12.67527585 8 14 Z M-51 26 C-51 27.32 -51 28.64 -51 30 C-49.68 30 -48.36 30 -47 30 C-47 28.68 -47 27.36 -47 26 C-48.32 26 -49.64 26 -51 26 Z M59 26 C59 27.32 59 28.64 59 30 C60.32 30 61.64 30 63 30 C63 28.68 63 27.36 63 26 C61.68 26 60.36 26 59 26 Z M47.64111328 35.18408203 C46.86406036 35.46833038 46.08700745 35.75257874 45.28640747 36.04544067 C44.47259613 36.36302338 43.65878479 36.68060608 42.8203125 37.0078125 C41.96694305 37.33030975 41.11357361 37.65280701 40.23434448 37.9850769 C38.44123002 38.66820432 36.65122438 39.35954223 34.86425781 40.05859375 C32.12216732 41.12610277 29.36735291 42.15403379 26.609375 43.1796875 C24.86628889 43.84922773 23.1240678 44.52102526 21.3828125 45.1953125 C20.55685577 45.50074982 19.73089905 45.80618713 18.87991333 46.12088013 C16.7809817 46.9601907 14.88135496 47.74667397 13 49 C11.8388397 51.60381789 11.8388397 51.60381789 12 54 C10.68 54.33 9.36 54.66 8 55 C8 61.93 8 68.86 8 76 C13.72710901 78.26580985 19.45540263 80.52794104 25.1875 82.78100586 C27.13592361 83.54810049 29.08352558 84.31728556 31.03027344 85.08862305 C33.83313576 86.19874548 36.63889403 87.30124748 39.4453125 88.40234375 C40.31116974 88.74716293 41.17702698 89.09198212 42.06912231 89.44725037 C50.31524526 92.66963661 50.31524526 92.66963661 59 92 C59 73.19 59 54.38 59 35 C52.82510148 33.86128057 52.82510148 33.86128057 47.64111328 35.18408203 Z M-47 35 C-47 53.81 -47 72.62 -47 92 C-40.67397424 93.1409715 -40.67397424 93.1409715 -35.3815918 91.66064453 C-34.54770432 91.34346466 -33.71381683 91.02628479 -32.85466003 90.69949341 C-31.5402166 90.17148636 -31.5402166 90.17148636 -30.19921875 89.6328125 C-29.28163284 89.27863251 -28.36404694 88.92445251 -27.4186554 88.55953979 C-24.50219107 87.42963716 -21.59504889 86.27762428 -18.6875 85.125 C-16.71345437 84.35662302 -14.73884994 83.58968002 -12.76367188 82.82421875 C-4.2709463 79.6680907 -4.2709463 79.6680907 4 76 C4 69.07 4 62.14 4 55 C2.68 54.67 1.36 54.34 0 54 C-0.00491455 53.24750977 -0.0098291 52.49501953 -0.01489258 51.71972656 C-0.79357958 48.63824684 -0.79357958 48.63824684 -4.32299805 47.16308594 C-5.7944708 46.58254754 -7.2748937 46.02438253 -8.76171875 45.484375 C-9.54513138 45.18307678 -10.32854401 44.88177856 -11.13569641 44.5713501 C-12.79582246 43.93697429 -14.45963976 43.31218789 -16.12670898 42.69628906 C-18.66732404 41.75745562 -21.19634976 40.79186647 -23.72460938 39.8203125 C-25.34053925 39.20673343 -26.95705843 38.59470371 -28.57421875 37.984375 C-29.32757004 37.69898865 -30.08092133 37.41360229 -30.85710144 37.11956787 C-36.48648953 35.04641293 -41.00858962 33.5021474 -47 35 Z M4 47 C4 47.99 4 48.98 4 50 C5.32 50 6.64 50 8 50 C8 49.01 8 48.02 8 47 C6.68 47 5.36 47 4 47 Z M-3.19604492 83.46875 C-4.03668991 83.78908203 -4.8773349 84.10941406 -5.74345398 84.43945312 C-6.64666885 84.78943359 -7.54988373 85.13941406 -8.48046875 85.5 C-9.40845779 85.85513672 -10.33644684 86.21027344 -11.29255676 86.57617188 C-14.25935231 87.71278259 -17.22343053 88.85630143 -20.1875 90 C-22.19709064 90.7712894 -24.20685421 91.54212843 -26.21679688 92.3125 C-31.14655046 94.20310978 -36.07409009 96.09939983 -41 98 C-37.97136377 101.30036468 -34.5269087 102.60719103 -30.41015625 104.171875 C-29.29875526 104.60188812 -29.29875526 104.60188812 -28.16490173 105.04058838 C-26.6005129 105.64295491 -25.03451295 106.24115164 -23.46704102 106.83544922 C-21.06937652 107.74738456 -18.68021757 108.67943449 -16.29101562 109.61328125 C-14.76870241 110.19654916 -13.24593037 110.77862125 -11.72265625 111.359375 C-11.00900406 111.63948425 -10.29535187 111.91959351 -9.56007385 112.20819092 C-4.79819557 114.00604759 -4.79819557 114.00604759 0 113 C1.32 112.67 2.64 112.34 4 112 C4 102.1 4 92.2 4 82 C1.03124012 82 -0.47341511 82.42221362 -3.19604492 83.46875 Z M8 82 C8 91.9 8 101.8 8 112 C15.09263435 114.83705374 19.01013777 112.75613093 25.890625 110.12890625 C27.00845367 109.70532082 27.00845367 109.70532082 28.14886475 109.2731781 C29.71623907 108.6775886 31.28281561 108.07989585 32.84863281 107.48022461 C35.25287018 106.56140311 37.66137576 105.65446452 40.0703125 104.74804688 C41.59402387 104.16738481 43.11747101 103.58602882 44.640625 103.00390625 C45.36348694 102.73300674 46.08634888 102.46210724 46.83111572 102.18299866 C50.61491484 100.94382859 50.61491484 100.94382859 53 98 C47.07616079 95.7143614 41.14937485 93.43649958 35.22045898 91.1640625 C33.20316701 90.3898173 31.18656063 89.61378337 29.1706543 88.8359375 C26.27570404 87.71926296 23.37836261 86.60900934 20.48046875 85.5 C19.57725388 85.15001953 18.674039 84.80003906 17.74345398 84.43945312 C16.90280899 84.11912109 16.062164 83.79878906 15.19604492 83.46875 C14.45658127 83.18451172 13.71711761 82.90027344 12.95524597 82.60742188 C10.86374837 81.85166198 10.86374837 81.85166198 8 82 Z M-51 97 C-51 98.32 -51 99.64 -51 101 C-49.68 101 -48.36 101 -47 101 C-47 99.68 -47 98.36 -47 97 C-48.32 97 -49.64 97 -51 97 Z M59 97 C59 98.32 59 99.64 59 101 C60.32 101 61.64 101 63 101 C63 99.68 63 98.36 63 97 C61.68 97 60.36 97 59 97 Z M4 117 C4 118.32 4 119.64 4 121 C5.32 121 6.64 121 8 121 C8 119.68 8 118.36 8 117 C6.68 117 5.36 117 4 117 Z ",
    fill: "#2A43FF",
    transform: "translate(58,1)"
  })),
  faq: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "128",
    height: "128",
    viewBox: "0 0 128 128"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 0 C0.93921295 -0.00852997 1.8784259 -0.01705994 2.84609985 -0.02584839 C3.8695752 -0.02494202 4.89305054 -0.02403564 5.94754028 -0.02310181 C7.57255966 -0.03317764 7.57255966 -0.03317764 9.23040771 -0.04345703 C12.81601533 -0.06247378 16.40143614 -0.06636308 19.98709106 -0.06851196 C22.47806882 -0.0749372 24.96904582 -0.08166536 27.46002197 -0.08868408 C32.68374379 -0.10066597 37.90739944 -0.10436395 43.13113403 -0.10317993 C48.49518694 -0.10211151 53.85895197 -0.11619924 59.22293091 -0.14419556 C65.69851551 -0.17751306 72.17384129 -0.19129199 78.64950943 -0.18996048 C81.11746813 -0.19232135 83.58542946 -0.20117206 86.05334091 -0.21662521 C89.50535558 -0.23621664 92.95644833 -0.23047327 96.40847778 -0.21841431 C97.9376181 -0.23527283 97.9376181 -0.23527283 99.49765015 -0.25247192 C105.41423318 -0.19994089 108.81556893 0.30252424 113.30740356 4.26742554 C115.72925921 7.90020901 115.57092993 9.62711104 115.59793091 13.95443726 C115.60464813 14.62959381 115.61136536 15.30475037 115.61828613 16.00036621 C115.63728625 18.23269 115.64119137 20.46471342 115.64334106 22.69711304 C115.64976795 24.25026574 115.65649623 25.80341723 115.66351318 27.35656738 C115.67549121 30.61317755 115.67919351 33.86968161 115.67800903 37.12631226 C115.67780589 41.29502445 115.70510019 45.46305455 115.73955345 49.63160515 C115.76181572 52.84013989 115.76584678 56.04851035 115.76478958 59.25711441 C115.76714686 60.79368565 115.77597766 62.33026133 115.79145432 63.86675644 C115.81110069 66.01886163 115.80528325 68.16949473 115.79324341 70.32162476 C115.79609344 71.54501556 115.79894348 72.76840637 115.80187988 74.02886963 C115.20709212 77.92441193 114.09078133 79.52009663 111.30740356 82.26742554 C108.34975079 84.23464705 106.05480159 84.51337929 102.53884888 84.49447632 C101.12783905 84.49424973 101.12783905 84.49424973 99.68832397 84.49401855 C98.68090149 84.48369598 97.673479 84.47337341 96.63552856 84.46273804 C95.59797424 84.45990814 94.56041992 84.45707825 93.49142456 84.4541626 C90.17996655 84.44297419 86.86877973 84.41787181 83.55740356 84.39242554 C81.31131372 84.38239402 79.06521964 84.37326847 76.81912231 84.36508179 C71.31512365 84.34303924 65.81128299 84.30957486 60.30740356 84.26742554 C60.00399048 84.89229858 59.70057739 85.51717163 59.38796997 86.16098022 C57.79016509 89.27572503 55.591966 91.62214271 53.30740356 94.26742554 C50.43884644 94.18305621 48.75058042 93.68050373 46.63943481 91.71273804 C42.30740356 86.7530253 42.30740356 86.7530253 42.30740356 84.26742554 C41.4441597 84.28074921 41.4441597 84.28074921 40.56347656 84.29434204 C34.56122798 84.38299455 28.55916609 84.4432339 22.556427 84.4871521 C20.31774335 84.5072387 18.07911198 84.53451334 15.84060669 84.56918335 C12.61847007 84.61783017 9.39702855 84.64042428 6.17459106 84.65805054 C5.17749115 84.67869568 4.18039124 84.69934082 3.15307617 84.72061157 C-2.79324852 84.72252171 -6.18166912 84.25692604 -10.69259644 80.26742554 C-13.11445208 76.63464207 -12.9561228 74.90774003 -12.98312378 70.58041382 C-12.989841 69.90525726 -12.99655823 69.23010071 -13.003479 68.53448486 C-13.02247912 66.30216108 -13.02638424 64.07013766 -13.02853394 61.83773804 C-13.03496082 60.28458533 -13.0416891 58.73143384 -13.04870605 57.17828369 C-13.06068408 53.92167352 -13.06438638 50.66516947 -13.0632019 47.40853882 C-13.06299876 43.23982662 -13.09029306 39.07179652 -13.12474632 34.90324593 C-13.14700859 31.69471119 -13.15103965 28.48634073 -13.14998245 25.27773666 C-13.15233974 23.74116542 -13.16117053 22.20458974 -13.17664719 20.66809464 C-13.19629356 18.51598944 -13.19047612 16.36535635 -13.17843628 14.21322632 C-13.18128632 12.98983551 -13.18413635 11.7664447 -13.18707275 10.50598145 C-12.59228499 6.61043914 -11.4759742 5.01475444 -8.69259644 2.26742554 C-5.7021087 0.45214383 -3.47806037 0.01431325 0 0 Z M6.30740356 27.26742554 C5.99505464 30.34388294 5.99505464 30.34388294 6.04177856 33.95492554 C6.03986511 34.61323364 6.03795166 35.27154175 6.03598022 35.94979858 C6.03461907 37.34181094 6.03831073 38.73383601 6.04666138 40.12582397 C6.05736256 42.25925143 6.0467645 44.39183684 6.03396606 46.52523804 C6.03528767 47.8768024 6.03785009 49.22836624 6.04177856 50.57992554 C6.04403442 51.81355835 6.04629028 53.04719116 6.0486145 54.31820679 C5.9997059 57.38812132 5.9997059 57.38812132 8.30740356 59.26742554 C9.62740356 59.26742554 10.94740356 59.26742554 12.30740356 59.26742554 C13.68966373 56.50290521 13.40265743 54.22128923 13.36990356 51.14242554 C13.36088013 50.04672241 13.35185669 48.95101929 13.34255981 47.82211304 C13.33095825 46.97906616 13.31935669 46.13601929 13.30740356 45.26742554 C16.27740356 45.26742554 19.24740356 45.26742554 22.30740356 45.26742554 C22.68959124 43.61127896 23.02135458 41.94285529 23.30740356 40.26742554 C22.29904295 39.03475206 22.29904295 39.03475206 20.24099731 39.16976929 C19.00543091 39.18717163 19.00543091 39.18717163 17.74490356 39.20492554 C16.9186145 39.21394897 16.09232544 39.22297241 15.24099731 39.23226929 C14.60291138 39.24387085 13.96482544 39.25547241 13.30740356 39.26742554 C13.30740356 36.62742554 13.30740356 33.98742554 13.30740356 31.26742554 C16.60740356 31.26742554 19.90740356 31.26742554 23.30740356 31.26742554 C23.68959124 29.61127896 24.02135458 27.94285529 24.30740356 26.26742554 C22.32621001 24.28623198 18.57295292 25.08242143 15.86990356 25.07992554 C15.17574341 25.06767944 14.48158325 25.05543335 13.76638794 25.04281616 C9.57880918 24.89502949 9.57880918 24.89502949 6.30740356 27.26742554 Z M39.30740356 25.26742554 C36.14059375 31.36514286 33.47170782 37.54783592 30.99490356 43.95492554 C30.62300903 44.87853882 30.2511145 45.8021521 29.86795044 46.75375366 C29.52183716 47.64900757 29.17572388 48.54426147 28.81912231 49.46664429 C28.50418823 50.26932739 28.18925415 51.0720105 27.86477661 51.89901733 C27.21133853 54.67562831 27.56988783 56.53816301 28.30740356 59.26742554 C30.75220435 59.07913782 30.75220435 59.07913782 33.30740356 58.26742554 C34.49208623 56.27355688 34.49208623 56.27355688 35.30740356 54.26742554 C37.4098196 54.13246302 39.51469966 54.03545246 41.61990356 53.95492554 C42.79166138 53.89691772 43.96341919 53.83890991 45.17068481 53.77914429 C46.7233606 54.02084351 46.7233606 54.02084351 48.30740356 54.26742554 C49.97537231 56.78695679 49.97537231 56.78695679 51.30740356 59.26742554 C52.62740356 59.26742554 53.94740356 59.26742554 55.30740356 59.26742554 C56.95022408 55.22158961 55.55582948 52.49982062 54.03396606 48.56820679 C53.7907663 47.93255295 53.54756653 47.29689911 53.29699707 46.64198303 C52.78246063 45.30283624 52.2626953 43.96568835 51.73806763 42.63046265 C50.93264109 40.58053008 50.14210676 38.52534964 49.35427856 36.46859741 C47.50414621 30.43298889 47.50414621 30.43298889 44.30740356 25.26742554 C42.64123241 25.22678722 40.97352262 25.22470454 39.30740356 25.26742554 Z M63.99490356 31.82992554 C60.64305002 36.67149177 60.82754461 41.58020831 61.30740356 47.26742554 C63.10094192 52.54839958 65.91739558 55.06637805 70.30740356 58.26742554 C75.55326782 60.01604696 81.20808053 59.62391435 86.61990356 58.70492554 C89.49329403 58.2371643 91.51243925 58.52758204 94.30740356 59.26742554 C95.17217269 55.80834902 95.21610848 53.67506895 94.30740356 50.26742554 C94.80240356 48.78242554 94.80240356 48.78242554 95.30740356 47.26742554 C95.84162461 41.29853273 95.84047079 36.33148856 92.30740356 31.26742554 C87.91427168 26.85028747 84.20857424 25.11821702 77.99490356 24.95492554 C71.48922022 25.0235871 68.33381343 27.02194433 63.99490356 31.82992554 Z ",
    fill: "#2A44FF",
    transform: "translate(12.692596435546875,16.732574462890625)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 0 C2.96922861 1.79349379 5.42452071 3.84904142 7 7 C7.13415472 9.6723621 7.04318541 12.32250488 7 15 C3.79604584 15 1.90600261 14.25664978 -1 13 C-0.835 13.928125 -0.67 14.85625 -0.5 15.8125 C0 19 0 19 0 22 C-5.00566288 22.29445076 -7.99160747 22.11763863 -12 19 C-14.61429492 16.47585319 -14.97469861 15.23192942 -15.375 11.5625 C-14.97244324 7.73821077 -14.39539302 5.97359133 -12 3 C-8.07887404 -0.1586848 -4.96686453 -0.69710379 0 0 Z ",
    fill: "#2A42FF",
    transform: "translate(95,48)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 0 C2 1 2 1 2.6328125 2.84765625 C2.79523437 3.57855469 2.95765625 4.30945312 3.125 5.0625 C3.29257812 5.79597656 3.46015625 6.52945313 3.6328125 7.28515625 C3.75398438 7.85105469 3.87515625 8.41695312 4 9 C1.69 9 -0.62 9 -3 9 C-2.5020163 5.26512223 -2.12508244 3.18762365 0 0 Z ",
    fill: "#2A42FF",
    transform: "translate(54,54)"
  })),
  iconBox: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "128",
    height: "128",
    viewBox: "0 0 128 128"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 0 C0.91273682 0.44951523 1.82547363 0.89903046 2.76586914 1.36216736 C5.68286327 2.80202434 8.59139381 4.25812928 11.5 5.71484375 C13.42524721 6.6683967 15.35102388 7.62088146 17.27734375 8.57226562 C22.69231709 11.25094496 28.09717431 13.94923404 33.5 16.65234375 C38.12 18.96234375 42.74 21.27234375 47.5 23.65234375 C47.5 47.41234375 47.5 71.17234375 47.5 95.65234375 C39.58 99.61234375 39.58 99.61234375 31.5 103.65234375 C26.96059898 105.93487093 26.96059898 105.93487093 22.42138672 108.21777344 C17.45459159 110.71007815 12.47759942 113.18171046 7.5 115.65234375 C6.62939941 116.08740234 5.75879883 116.52246094 4.86181641 116.97070312 C2.53887395 118.12734734 0.2087375 119.26767437 -2.125 120.40234375 C-2.79265381 120.7375 -3.46030762 121.07265625 -4.14819336 121.41796875 C-8.22014843 123.36956297 -11.01868514 124.139499 -15.5 123.65234375 C-18.95711078 122.35943033 -22.21551338 120.71327879 -25.5078125 119.05078125 C-26.46968475 118.5766983 -27.43155701 118.10261536 -28.4225769 117.61416626 C-31.49566769 116.09626913 -34.56030122 114.5621025 -37.625 113.02734375 C-39.66352747 112.01714878 -41.70258511 111.00802293 -43.7421875 110 C-49.33532836 107.23170858 -54.91882903 104.44469623 -60.5 101.65234375 C-64.46 99.67234375 -68.42 97.69234375 -72.5 95.65234375 C-72.5 71.89234375 -72.5 48.13234375 -72.5 23.65234375 C-67.22 21.01234375 -61.94 18.37234375 -56.5 15.65234375 C-52.3670439 13.57316135 -52.3670439 13.57316135 -48.234375 11.4934082 C-44.58619995 9.66197677 -40.93173959 7.8433637 -37.27490234 6.02929688 C-35.43540591 5.11650786 -33.59717148 4.20117085 -31.76025391 3.28320312 C-29.17950342 1.99776824 -26.59121743 0.72901986 -24 -0.53515625 C-23.22938232 -0.92179443 -22.45876465 -1.30843262 -21.66479492 -1.70678711 C-20.57775269 -2.23091187 -20.57775269 -2.23091187 -19.46875 -2.765625 C-18.53192383 -3.22618286 -18.53192383 -3.22618286 -17.57617188 -3.69604492 C-10.80888051 -5.81997491 -5.95139192 -3.00695531 0 0 Z M-20.75 3.65234375 C-21.82765625 4.20921875 -22.9053125 4.76609375 -24.015625 5.33984375 C-24.83546875 5.77296875 -25.6553125 6.20609375 -26.5 6.65234375 C-22.69991478 9.84611327 -18.36609845 11.81451284 -13.9296875 13.9609375 C-13.09341827 14.36893082 -12.25714905 14.77692413 -11.39553833 15.19728088 C-9.62635004 16.05912212 -7.85613155 16.91885135 -6.08496094 17.77661133 C-3.40273683 19.07640263 -0.72460532 20.38433996 1.953125 21.69335938 C3.67944697 22.53304676 5.40600233 23.37225454 7.1328125 24.2109375 C7.92172882 24.596483 8.71064514 24.9820285 9.52346802 25.3792572 C13.59451802 27.3449317 17.69869237 29.22119352 21.86035156 30.98754883 C23.06307709 31.50035149 23.06307709 31.50035149 24.2901001 32.02351379 C26.72497741 32.9168809 26.72497741 32.9168809 30.1015625 31.73046875 C31.09929687 31.1271875 32.09703125 30.52390625 33.125 29.90234375 C34.14851563 29.309375 35.17203125 28.71640625 36.2265625 28.10546875 C36.97679687 27.6259375 37.72703125 27.14640625 38.5 26.65234375 C38.5 25.99234375 38.5 25.33234375 38.5 24.65234375 C25.20268977 17.95652476 11.90187095 11.26200341 -1.5 4.77734375 C-2.35811279 4.35533691 -3.21622559 3.93333008 -4.1003418 3.49853516 C-4.892229 3.11874512 -5.68411621 2.73895508 -6.5 2.34765625 C-7.180625 2.01781738 -7.86125 1.68797852 -8.5625 1.34814453 C-13.39660691 -0.38789437 -16.50061669 1.4352742 -20.75 3.65234375 Z M-36.5625 11.65234375 C-37.66271484 12.20921875 -37.66271484 12.20921875 -38.78515625 12.77734375 C-39.63400391 13.21046875 -39.63400391 13.21046875 -40.5 13.65234375 C-40.5 14.31234375 -40.5 14.97234375 -40.5 15.65234375 C-34.22348573 18.75701984 -27.94252797 21.85256248 -21.65844727 24.94189453 C-19.52265512 25.99319706 -17.38787631 27.04656093 -15.25415039 28.10205078 C-12.18121296 29.62169031 -9.10466825 31.13379938 -6.02734375 32.64453125 C-5.07915268 33.11543182 -4.13096161 33.5863324 -3.15403748 34.07150269 C5.05188765 38.55923647 5.05188765 38.55923647 13.93359375 38.97265625 C14.59488281 38.57820313 15.25617188 38.18375 15.9375 37.77734375 C16.61683594 37.38804688 17.29617187 36.99875 17.99609375 36.59765625 C18.49238281 36.28570312 18.98867187 35.97375 19.5 35.65234375 C16.68542651 33.42820343 13.87741475 31.7179497 10.66796875 30.12109375 C9.7147876 29.64510742 8.76160645 29.16912109 7.77954102 28.67871094 C6.75916748 28.17500977 5.73879395 27.67130859 4.6875 27.15234375 C3.11150024 26.36972168 3.11150024 26.36972168 1.50366211 25.57128906 C-6.11917922 21.79820124 -13.76911244 18.08190599 -21.4375 14.40234375 C-22.43177002 13.92474609 -23.42604004 13.44714844 -24.45043945 12.95507812 C-25.81881958 12.30249023 -25.81881958 12.30249023 -27.21484375 11.63671875 C-28.02042725 11.25225586 -28.82601074 10.86779297 -29.65600586 10.47167969 C-32.65610011 9.13865754 -33.67552795 10.18594525 -36.5625 11.65234375 Z M-56.75 21.15234375 C-57.3996875 21.48621094 -58.049375 21.82007813 -58.71875 22.1640625 C-60.31622504 22.9862923 -61.90862822 23.81836282 -63.5 24.65234375 C-63.5 25.31234375 -63.5 25.97234375 -63.5 26.65234375 C-58.269688 29.22082087 -53.03691241 31.78418107 -47.80175781 34.34277344 C-46.02014123 35.21440709 -44.23921338 36.08744992 -42.45898438 36.96191406 C-39.90413084 38.21658044 -37.34686591 39.46620436 -34.7890625 40.71484375 C-33.99005524 41.10857178 -33.19104797 41.5022998 -32.36782837 41.90795898 C-28.60950295 43.9213568 -28.60950295 43.9213568 -24.5 44.65234375 C-24.83 45.97234375 -25.16 47.29234375 -25.5 48.65234375 C-30.49565744 47.13639984 -35.01304388 45.05081932 -39.671875 42.73828125 C-40.43550354 42.36377838 -41.19913208 41.98927551 -41.98590088 41.60342407 C-45.23510002 40.00983735 -48.47993038 38.40744124 -51.72509766 36.80566406 C-54.10164636 35.63419933 -56.48042674 34.46736329 -58.859375 33.30078125 C-59.59581238 32.93520111 -60.33224976 32.56962097 -61.09100342 32.19296265 C-64.62796008 30.30928004 -64.62796008 30.30928004 -68.5 29.65234375 C-68.5 50.44234375 -68.5 71.23234375 -68.5 92.65234375 C-60.25 96.61234375 -52 100.57234375 -43.5 104.65234375 C-29.51791546 111.4355353 -29.51791546 111.4355353 -25.05273438 113.6171875 C-23.4043457 114.41576172 -23.4043457 114.41576172 -21.72265625 115.23046875 C-20.76109619 115.6987207 -19.79953613 116.16697266 -18.80883789 116.64941406 C-16.61380921 117.78515078 -16.61380921 117.78515078 -14.5 117.65234375 C-14.38419557 109.62045308 -14.29533166 101.58891059 -14.24093914 93.55639172 C-14.21483434 89.82660138 -14.17942257 86.09738175 -14.12280273 82.36791992 C-14.0685108 78.76930949 -14.03858611 75.17124823 -14.02561378 71.5722599 C-14.01636849 70.19864566 -13.99831397 68.82506181 -13.97134972 67.45168114 C-13.935109 65.5295272 -13.93295806 63.60682164 -13.93237305 61.68432617 C-13.92126999 60.58956467 -13.91016693 59.49480316 -13.89872742 58.36686707 C-14.22978912 55.42455668 -14.22978912 55.42455668 -16.98469543 53.9120636 C-18.22977119 53.28850227 -18.22977119 53.28850227 -19.5 52.65234375 C-20.3125 50.46484375 -20.3125 50.46484375 -20.5 48.65234375 C-19.97792969 48.85472656 -19.45585938 49.05710937 -18.91796875 49.265625 C-13.67923262 50.90789079 -10.69427412 50.69518104 -5.6875 48.33984375 C-4.34751953 47.63408203 -4.34751953 47.63408203 -2.98046875 46.9140625 C-0.78068851 45.79511916 1.09355476 45.12914526 3.5 44.65234375 C3.17 45.97234375 2.84 47.29234375 2.5 48.65234375 C-1.79 50.96234375 -6.08 53.27234375 -10.5 55.65234375 C-10.5 76.11234375 -10.5 96.57234375 -10.5 117.65234375 C-6.76047941 116.40583689 -3.61532574 115.33587985 -0.16625977 113.63696289 C0.63154404 113.24638199 1.42934784 112.85580109 2.25132751 112.4533844 C3.09522537 112.03564255 3.93912323 111.6179007 4.80859375 111.1875 C5.69354019 110.75352402 6.57848663 110.31954803 7.49024963 109.87242126 C10.3077656 108.49012265 13.12277353 107.10281253 15.9375 105.71484375 C18.7489961 104.33115658 21.56102944 102.94858635 24.3740387 101.56797791 C26.12022836 100.71068895 27.86550889 99.8515449 29.60972595 98.99024963 C30.41068192 98.59651657 31.21163788 98.20278351 32.03686523 97.79711914 C32.73158432 97.45451553 33.42630341 97.11191193 34.14207458 96.75892639 C37.2258141 95.31171665 40.36898329 93.99420805 43.5 92.65234375 C43.5 71.86234375 43.5 51.07234375 43.5 29.65234375 C39.03308145 31.1413166 35.64599898 32.5216614 31.625 34.77734375 C29.93375 35.72609375 28.2425 36.67484375 26.5 37.65234375 C26.5 45.57234375 26.5 53.49234375 26.5 61.65234375 C24.52 62.31234375 22.54 62.97234375 20.5 63.65234375 C19.10953022 64.30799231 17.7319702 64.9924082 16.375 65.71484375 C13.61905858 67.18135876 11.63142707 67.86948698 8.5 68.65234375 C8.5 60.73234375 8.5 52.81234375 8.5 44.65234375 C-3.06673481 38.42410193 -14.75227797 32.47561402 -26.54940796 26.69821167 C-28.14109104 25.91781853 -29.73144865 25.13471614 -31.32046509 24.34890747 C-33.58350811 23.23107841 -35.85147347 22.12393266 -38.12109375 21.01953125 C-38.80583771 20.67936478 -39.49058167 20.3391983 -40.19607544 19.98872375 C-46.88325027 16.76483781 -50.46709858 17.84488141 -56.75 21.15234375 Z M16.9375 41.65234375 C15.473125 42.31234375 14.00875 42.97234375 12.5 43.65234375 C12.5 49.92234375 12.5 56.19234375 12.5 62.65234375 C15.8 61.00234375 19.1 59.35234375 22.5 57.65234375 C22.5 51.71234375 22.5 45.77234375 22.5 39.65234375 C20.54257992 39.65234375 18.68736309 40.86367306 16.9375 41.65234375 Z ",
    fill: "#2A44FF",
    transform: "translate(76.5,4.34765625)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 0 C5.39026228 0.52895097 9.24229489 2.46333696 13.875 5.0625 C14.56335937 5.43955078 15.25171875 5.81660156 15.9609375 6.20507812 C17.6449213 7.12893035 19.32307467 8.06339667 21 9 C20.34 10.32 19.68 11.64 19 13 C12.32892506 10.50705133 6.13636021 7.61659877 0 4 C0 2.68 0 1.36 0 0 Z ",
    fill: "#2B43FF",
    transform: "translate(12,76)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 0 C5.28137429 0.51525603 8.57221156 2.25477117 13 5 C12.67 6.32 12.34 7.64 12 9 C7.24518354 8.42365861 4.02951788 6.44931479 0 4 C0 2.68 0 1.36 0 0 Z ",
    fill: "#2A44FF",
    transform: "translate(12,85)"
  })),
  pageSlider: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "128",
    height: "128",
    viewBox: "0 0 128 128"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 0 C0.93783829 -0.00571014 1.87567657 -0.01142029 2.8419342 -0.01730347 C3.86900482 -0.01842133 4.89607544 -0.01953918 5.95426941 -0.02069092 C7.57906975 -0.02813828 7.57906975 -0.02813828 9.23669434 -0.03573608 C12.82769908 -0.05036643 16.41865965 -0.05716118 20.00968933 -0.06268311 C22.50209556 -0.06843383 24.99450177 -0.07419157 27.48690796 -0.07995605 C32.04792072 -0.08912439 36.60892079 -0.0954237 41.16994172 -0.09845281 C47.2094484 -0.10248618 53.24879961 -0.11476168 59.28825378 -0.14080811 C65.76913655 -0.16832863 72.24988584 -0.18120014 78.73082542 -0.18312836 C81.20157163 -0.18615649 83.67231695 -0.19419036 86.14303017 -0.20731354 C89.59979846 -0.22436344 93.0560699 -0.22249607 96.51286316 -0.21600342 C98.04436005 -0.22982559 98.04436005 -0.22982559 99.60679626 -0.243927 C104.94310279 -0.21252176 108.86914673 0.03300147 113.42765808 3.14044189 C115.84911588 6.77262859 115.72347042 9.45495894 115.71818542 13.65362549 C115.72490265 14.41656418 115.73161987 15.17950287 115.73854065 15.96556091 C115.75755299 18.49006649 115.76144651 21.01430666 115.76359558 23.53887939 C115.77002151 25.29381419 115.77674972 27.0487479 115.7837677 28.80368042 C115.79574872 32.48399336 115.7994477 36.16421238 115.79826355 39.84454346 C115.79806037 44.55803049 115.82535764 49.27091451 115.85980797 53.98425865 C115.88205826 57.60969808 115.88610166 61.23499199 115.8850441 64.86049271 C115.88740307 66.59801943 115.89624327 68.33554999 115.91170883 70.07300949 C115.93133056 72.5052573 115.92554654 74.9361999 115.91349792 77.36846924 C115.92473694 78.08448807 115.93597595 78.8005069 115.94755554 79.53822327 C115.90302185 83.08041633 115.49073099 85.04039237 113.58479309 88.06369019 C110.45880317 91.07319348 107.93271619 91.26599982 103.7726593 91.28088379 C102.81654755 91.28659393 101.86043579 91.29230408 100.87535095 91.29818726 C99.82800781 91.29930511 98.78066467 91.30042297 97.70158386 91.30157471 C96.5972702 91.30653961 95.49295654 91.31150452 94.35517883 91.31661987 C90.69443646 91.33124989 87.03373741 91.33804457 83.37297058 91.34356689 C80.83332823 91.3493172 78.2936859 91.35507495 75.75404358 91.36083984 C71.10726278 91.37000782 66.46049503 91.37630746 61.81370747 91.3793366 C54.9777193 91.38381754 48.14193107 91.40136886 41.30600369 91.43033719 C35.38199561 91.45456847 29.45803728 91.46228137 23.53397751 91.46401215 C21.01495652 91.46704265 18.49593646 91.47508448 15.97694778 91.48819733 C12.45531751 91.50522233 8.93417592 91.50338608 5.41252136 91.49688721 C4.36922668 91.50610199 3.32593201 91.51531677 2.25102234 91.52481079 C-4.19595477 91.48747869 -7.88300621 90.8297776 -12.57234192 86.14044189 C-12.78635295 83.60812697 -12.87643998 81.1837292 -12.8787384 78.64898682 C-12.88706192 77.87644058 -12.89538544 77.10389435 -12.90396118 76.30793762 C-12.92812122 73.74554449 -12.93684124 71.18340572 -12.94343567 68.62091064 C-12.95239865 66.84212669 -12.96152043 65.06334352 -12.97079468 63.28456116 C-12.98730438 59.55120001 -12.99498817 55.81792874 -12.99787903 52.08453369 C-13.00325972 47.30252377 -13.04091778 42.52135987 -13.08662319 37.73958874 C-13.11638272 34.06353177 -13.12360237 30.38767858 -13.12460518 26.71151161 C-13.12881102 24.94884689 -13.14125999 23.18618175 -13.16212273 21.42363548 C-13.1890106 18.95515427 -13.18422036 16.48863395 -13.17170715 14.02008057 C-13.18654144 13.29313995 -13.20137573 12.56619934 -13.21665955 11.81723022 C-13.16065012 7.93293781 -12.68333395 6.27882897 -10.22238159 3.21046448 C-6.73939045 0.48979943 -4.28821755 0.01564447 0 0 Z M-6.19650269 7.74102783 C-8.05681153 10.98533944 -8.07355025 13.31151981 -8.0740509 17.04864502 C-8.07945389 17.73530746 -8.08485687 18.42196991 -8.09042358 19.12944031 C-8.10290727 21.3939658 -8.08642405 23.6572189 -8.06843567 25.92169189 C-8.06859067 27.49823066 -8.07007979 29.07476981 -8.07284546 30.65130615 C-8.07422928 33.95335766 -8.06167478 37.25497472 -8.03889465 40.5569458 C-8.01050968 44.78732453 -8.01324737 49.01698149 -8.02598476 53.24741364 C-8.03294329 56.50225986 -8.02515075 59.75693956 -8.01272774 63.01176453 C-8.0082149 64.57146058 -8.00787498 66.13117453 -8.01179314 67.69087219 C-8.01470717 69.87169978 -7.99819096 72.05153648 -7.97639465 74.23223877 C-7.97099167 75.47259888 -7.96558868 76.71295898 -7.96002197 77.99090576 C-7.53147788 81.47242383 -6.96782322 82.64698788 -4.57234192 85.14044189 C-2.42147715 85.73916023 -2.42147715 85.73916023 0.02018738 85.64837646 C1.43344803 85.66529541 1.43344803 85.66529541 2.8752594 85.68255615 C3.90704315 85.67445923 4.9388269 85.6663623 6.00187683 85.65802002 C7.08989594 85.6650293 8.17791504 85.67203857 9.29890442 85.67926025 C12.90457997 85.69690231 16.50947419 85.68519483 20.11515808 85.67169189 C22.61475272 85.674385 25.11434634 85.67826591 27.61393738 85.68328857 C32.85628776 85.68919205 38.09843392 85.680973 43.34074402 85.66192627 C49.40245595 85.64015682 55.46362975 85.6472081 61.52532864 85.66923189 C67.35543413 85.68956678 73.18533498 85.68741998 79.01545715 85.67570496 C81.49704564 85.67303125 83.97864781 85.67632992 86.46022034 85.68562317 C89.92499999 85.69575001 93.38873756 85.68034045 96.85343933 85.65802002 C97.88522308 85.66611694 98.91700684 85.67421387 99.98005676 85.68255615 C100.92223053 85.67127686 101.8644043 85.65999756 102.83512878 85.64837646 C104.0640258 85.64611431 104.0640258 85.64611431 105.31774902 85.64380646 C107.58969952 85.30273463 107.58969952 85.30273463 109.19046116 83.30554199 C110.94990785 80.22650248 110.8163211 77.76524744 110.83171082 74.23223877 C110.83857407 73.54557632 110.84543732 72.85891388 110.85250854 72.15144348 C110.87077396 69.88714786 110.86694017 67.6235452 110.86125183 65.35919189 C110.86581341 63.78265152 110.87111891 62.20611313 110.87713623 60.62957764 C110.8860665 57.3276155 110.88364485 54.02589524 110.873703 50.72393799 C110.86220633 46.49346758 110.8824351 42.26383101 110.91162014 38.03347015 C110.92996869 34.77863264 110.92969255 31.52399552 110.92398262 28.26911926 C110.92382928 26.7094048 110.92988452 25.14967686 110.94227409 23.5900116 C110.95715996 21.40902403 110.94652773 19.22958426 110.92936707 17.04864502 C110.9292009 15.80828491 110.92903473 14.5679248 110.92886353 13.28997803 C110.61960972 10.14629147 110.61960972 10.14629147 109.05181885 7.74102783 C104.8681343 5.1892228 100.7472539 5.5842405 95.93937683 5.62286377 C94.33879929 5.61234985 94.33879929 5.61234985 92.70588684 5.60162354 C89.17537994 5.58400475 85.64567327 5.59568072 82.11515808 5.60919189 C79.66422878 5.60649812 77.21330052 5.60261665 74.76237488 5.59759521 C69.62433198 5.59169487 64.48656712 5.60028077 59.34855652 5.61895752 C52.75734323 5.64174688 46.16678142 5.62862674 39.57559204 5.60466766 C34.51415586 5.59022446 29.45287452 5.59480899 24.39143372 5.60517883 C21.96091129 5.60785018 19.53037487 5.60456209 17.09986877 5.59526062 C13.70484592 5.58511982 10.31088308 5.60056297 6.91593933 5.62286377 C5.90802338 5.61476685 4.90010742 5.60666992 3.86164856 5.59832764 C-1.43830038 5.64382125 -1.43830038 5.64382125 -6.19650269 7.74102783 Z ",
    fill: "#2B44FF",
    transform: "translate(12.572341918945313,8.85955810546875)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 0 C3.1224244 0.23815101 4.68425738 0.72655498 7.0703125 2.79296875 C8.08738281 3.97826172 8.08738281 3.97826172 9.125 5.1875 C9.8984375 6.08726563 10.671875 6.98703125 11.46875 7.9140625 C15.64004307 12.99943523 19.71371334 18.15540083 23.73388672 23.36083984 C25.54431584 25.70469274 27.36668718 28.03920982 29.1875 30.375 C30.12537819 31.58303982 31.06305076 32.79123955 32 34 C31.34 35.32 30.68 36.64 30 38 C6.24 38 -17.52 38 -42 38 C-42.66 36.68 -43.32 35.36 -44 34 C-38.96029125 27.51031917 -33.69354158 21.36379473 -28.1015625 15.34765625 C-25.89049639 12.9892118 -25.89049639 12.9892118 -24 10 C-19.12865225 10.41754409 -17.27969406 12.54391904 -14 16 C-13.61142822 15.55084229 -13.22285645 15.10168457 -12.82250977 14.63891602 C-11.06956798 12.61310199 -9.3160417 10.58779476 -7.5625 8.5625 C-6.95083984 7.85544922 -6.33917969 7.14839844 -5.70898438 6.41992188 C-5.12568359 5.74638672 -4.54238281 5.07285156 -3.94140625 4.37890625 C-3.40201416 3.7557251 -2.86262207 3.13254395 -2.30688477 2.49047852 C-1.5608583 1.63964878 -0.80014584 0.80014584 0 0 Z M1 8 C-0.78770378 9.92012628 -2.46374342 11.84966705 -4.125 13.875 C-4.85553589 14.75333496 -4.85553589 14.75333496 -5.60083008 15.64941406 C-7.07464328 17.42697922 -8.53875827 19.21209245 -10 21 C-11.23943359 22.51207031 -11.23943359 22.51207031 -12.50390625 24.0546875 C-16.05195035 27.6733785 -16.05195035 27.6733785 -18 32 C-4.8 32 8.4 32 22 32 C17.81728783 26.42305045 13.61901159 20.92360059 9.25 15.5 C8.67378906 14.77296875 8.09757812 14.0459375 7.50390625 13.296875 C6.95089844 12.61109375 6.39789063 11.9253125 5.828125 11.21875 C5.3321582 10.59935547 4.83619141 9.97996094 4.32519531 9.34179688 C3.88788086 8.89900391 3.45056641 8.45621094 3 8 C2.34 8 1.68 8 1 8 Z M-22 18 C-24.00300549 20.14309664 -26.00249744 22.28928497 -28 24.4375 C-28.57234375 25.04916016 -29.1446875 25.66082031 -29.734375 26.29101562 C-32.63607845 28.79527212 -32.63607845 28.79527212 -34 32 C-30.91200696 32.43340253 -28.98259501 32.68351136 -26 32 C-23.08025075 29.74578183 -20.75253451 27.25555564 -19 24 C-19.26922226 20.98910615 -19.8271522 20.1728478 -22 18 Z ",
    fill: "#2A43FF",
    transform: "translate(70,45)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 0 C3.13921957 2.60488433 5.69148327 4.79630908 6.2734375 8.953125 C6.46329043 13.24672199 6.4342668 16.09582964 3.625 19.5 C-0.42408255 23.3562691 -3.09329411 23.34389054 -8.51953125 23.28125 C-12.06688108 22.87903081 -13.68718177 21.67419608 -16 19 C-18.03969799 15.30911793 -18.51184637 12.18007873 -18 8 C-14.15497643 0.45783838 -8.12166336 -2.79077733 0 0 Z M-7 5 C-9.666508 7.16588845 -9.666508 7.16588845 -12 10 C-11.91985673 13.44616056 -11.4443896 14.5556104 -9 17 C-5.90228335 17.32954432 -3.82668977 17.45334601 -1.0625 15.9375 C0.61676907 12.87530347 -0.31378875 10.30629059 -1 7 C-2.98 6.34 -4.96 5.68 -7 5 Z ",
    fill: "#2B44FF",
    transform: "translate(59,27)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 0 C2.375 1.5625 2.375 1.5625 4 4 C4.72003094 9.86310905 4.72003094 9.86310905 2.8125 12.875 C0.42957957 14.35405406 -1.18417448 14.86591307 -4 15 C-6.2831838 13.8584081 -8.19012683 12.80987317 -10 11 C-10.36395977 7.14202645 -10.56007535 4.84011302 -8.375 1.5625 C-5.28314769 -0.47161336 -3.63632575 -0.60605429 0 0 Z M-4 6 C-4 6.66 -4 7.32 -4 8 C-3.34 8 -2.68 8 -2 8 C-2 7.34 -2 6.68 -2 6 C-2.66 6 -3.32 6 -4 6 Z ",
    fill: "#2B43FF",
    transform: "translate(67,104)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 0 C2.375 1.5625 2.375 1.5625 4 4 C4.72003094 9.86310905 4.72003094 9.86310905 2.8125 12.875 C0.42957957 14.35405406 -1.18417448 14.86591307 -4 15 C-6.2831838 13.8584081 -8.19012683 12.80987317 -10 11 C-10.36395977 7.14202645 -10.56007535 4.84011302 -8.375 1.5625 C-5.28314769 -0.47161336 -3.63632575 -0.60605429 0 0 Z M-4 6 C-4 6.66 -4 7.32 -4 8 C-3.34 8 -2.68 8 -2 8 C-2 7.34 -2 6.68 -2 6 C-2.66 6 -3.32 6 -4 6 Z ",
    fill: "#2A44FF",
    transform: "translate(87,104)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 0 C2.375 1.5625 2.375 1.5625 4 4 C4.72003094 9.86310905 4.72003094 9.86310905 2.8125 12.875 C0.42957957 14.35405406 -1.18417448 14.86591307 -4 15 C-6.2831838 13.8584081 -8.19012683 12.80987317 -10 11 C-10.36395977 7.14202645 -10.56007535 4.84011302 -8.375 1.5625 C-5.28314769 -0.47161336 -3.63632575 -0.60605429 0 0 Z M-4 6 C-4 6.66 -4 7.32 -4 8 C-3.34 8 -2.68 8 -2 8 C-2 7.34 -2 6.68 -2 6 C-2.66 6 -3.32 6 -4 6 Z ",
    fill: "#2A43FF",
    transform: "translate(47,104)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 0 C2.50768568 1.22326131 3.96410845 1.97860149 5.5625 4.25 C6.0625 6.625 6.0625 6.625 5.5625 9.25 C3.375 12.125 3.375 12.125 0.5625 14.25 C-2.25 14.0625 -2.25 14.0625 -4.4375 13.25 C-4.2725 12.486875 -4.1075 11.72375 -3.9375 10.9375 C-3.22213166 7.09239516 -3.61977242 4.03199007 -4.4375 0.25 C-2.4375 -0.75 -2.4375 -0.75 0 0 Z ",
    fill: "#2B44FF",
    transform: "translate(111.4375,47.75)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 0 C0.53625 0.268125 1.0725 0.53625 1.625 0.8125 C1.46 1.575625 1.295 2.33875 1.125 3.125 C0.40963166 6.97010484 0.80727242 10.03050993 1.625 13.8125 C-0.5625 14.625 -0.5625 14.625 -3.375 14.8125 C-6.36871843 12.55057941 -8.05725187 10.96794775 -9.0625 7.3125 C-7.90375758 3.0988912 -4.54745343 -0.35900948 0 0 Z ",
    fill: "#2B44FF",
    transform: "translate(19.375,47.1875)"
  })),
  postSlider: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "128",
    height: "128",
    viewBox: "0 0 128 128"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 0 C0.89119537 -0.0049649 1.78239075 -0.00992981 2.70059204 -0.01504517 C5.65733606 -0.02968503 8.61402643 -0.03647169 11.57080078 -0.04199219 C13.62102256 -0.04774197 15.67124433 -0.05349972 17.72146606 -0.05926514 C22.02394868 -0.0697802 26.32641258 -0.07561962 30.62890625 -0.07910156 C36.14613902 -0.08458852 41.66312528 -0.10861878 47.18028069 -0.13707352 C51.41644009 -0.1556826 55.6525399 -0.16090457 59.88873672 -0.16243744 C61.92293776 -0.16546821 63.95713764 -0.17351098 65.99129868 -0.18662262 C68.83553663 -0.20364753 71.67916949 -0.2018116 74.5234375 -0.1953125 C75.78755463 -0.20913467 75.78755463 -0.20913467 77.07720947 -0.22323608 C80.46861338 -0.19891911 82.9379823 -0.08675009 85.94534302 1.55841064 C87.39111328 3.16113281 87.39111328 3.16113281 87.39111328 5.16113281 C88.44298828 5.09925781 89.49486328 5.03738281 90.57861328 4.97363281 C95.52898541 5.21709374 97.94700376 6.71702329 101.39111328 10.16113281 C101.65853882 12.46273804 101.65853882 12.46273804 101.68164062 15.37353516 C101.69440033 16.46161469 101.70716003 17.54969421 101.7203064 18.67074585 C101.72253204 19.85093292 101.72475769 21.03112 101.72705078 22.24707031 C101.73703598 24.05976913 101.73703598 24.05976913 101.7472229 25.90908813 C101.75736427 28.46965 101.76203946 31.03023838 101.76171875 33.59082031 C101.76608767 37.51313799 101.80238241 41.43432722 101.84033203 45.35644531 C101.84620061 47.84081645 101.85016973 50.32519295 101.85205078 52.80957031 C101.86642181 53.98570892 101.88079285 55.16184753 101.89559937 56.37362671 C101.88944611 57.46801056 101.88329285 58.56239441 101.87695312 59.68994141 C101.87980316 60.65209564 101.8826532 61.61424988 101.8855896 62.6055603 C101.2446697 65.91798843 99.99686629 67.08276047 97.39111328 69.16113281 C93.91786148 70.31888341 91.03043881 70.22979933 87.39111328 70.16113281 C87.10236328 70.80050781 86.81361328 71.43988281 86.51611328 72.09863281 C85.39111328 74.16113281 85.39111328 74.16113281 83.39111328 75.16113281 C80.69218147 75.24788819 78.01942097 75.27671179 75.32080078 75.25878906 C74.52457306 75.25737411 73.72834534 75.25595917 72.9079895 75.25450134 C70.36065948 75.24889626 67.81341681 75.23634295 65.26611328 75.22363281 C63.54085413 75.21861846 61.81559361 75.21405544 60.09033203 75.20996094 C55.85722537 75.19892519 51.62418414 75.18165718 47.39111328 75.16113281 C46.82861328 73.22363281 46.82861328 73.22363281 46.39111328 71.16113281 C48.30391904 69.24832706 51.80775923 69.93135711 54.41845703 69.87988281 C55.12257217 69.86147339 55.82668732 69.84306396 56.55213928 69.82409668 C58.81087671 69.76517921 61.06969102 69.71244471 63.32861328 69.66113281 C66.29622468 69.59356511 69.26358975 69.51986076 72.23095703 69.44238281 C72.91745834 69.42880737 73.60395966 69.41523193 74.31126404 69.40124512 C77.97476811 69.34606603 77.97476811 69.34606603 81.39111328 68.16113281 C81.39111328 48.03113281 81.39111328 27.90113281 81.39111328 7.16113281 C78.25952968 5.59534101 74.92221534 6.02276172 71.48486328 6.03173828 C70.66848389 6.02998596 69.85210449 6.02823364 69.01098633 6.02642822 C66.30434055 6.02201618 63.59775976 6.02494543 60.89111328 6.02832031 C59.01546211 6.02764709 57.13981103 6.02667691 55.26416016 6.02542114 C51.32990693 6.02394505 47.39567638 6.0260959 43.46142578 6.03076172 C38.41042272 6.03645895 33.35947279 6.03317948 28.30847168 6.02718925 C24.43440346 6.02358127 20.5603479 6.02472333 16.6862793 6.02731705 C14.82348626 6.02798566 12.96069209 6.02716018 11.09790039 6.02483749 C8.49769023 6.0223071 5.89756695 6.02615707 3.29736328 6.03173828 C2.13466919 6.02870193 2.13466919 6.02870193 0.94848633 6.02560425 C-2.95841078 5.96346169 -2.95841078 5.96346169 -6.60888672 7.16113281 C-6.60888672 27.29113281 -6.60888672 47.42113281 -6.60888672 68.16113281 C-3.60922502 69.66096366 -0.48941711 69.40015337 2.80517578 69.47753906 C3.53481537 69.49832016 4.26445496 69.51910126 5.01620483 69.54051208 C7.34941091 69.60595198 9.68273049 69.66486649 12.01611328 69.72363281 C13.59685424 69.76682334 15.17758367 69.8104378 16.75830078 69.85449219 C20.63578832 69.96162762 24.51339013 70.06291063 28.39111328 70.16113281 C28.39111328 71.81113281 28.39111328 73.46113281 28.39111328 75.16113281 C23.19501871 75.23535186 17.99923345 75.28976728 12.80273438 75.32592773 C11.03542709 75.34100383 9.26815715 75.36146803 7.50097656 75.38745117 C4.95905333 75.42388683 2.41762522 75.44087075 -0.12451172 75.45410156 C-0.91319641 75.46958542 -1.7018811 75.48506927 -2.51446533 75.50102234 C-5.83808893 75.50203941 -8.19729868 75.38777628 -11.13916016 73.76782227 C-12.60888672 72.16113281 -12.60888672 72.16113281 -12.60888672 70.16113281 C-14.18669922 70.25394531 -14.18669922 70.25394531 -15.79638672 70.34863281 C-20.74675884 70.10517189 -23.1647772 68.60524233 -26.60888672 65.16113281 C-26.87631226 62.85952759 -26.87631226 62.85952759 -26.89941406 59.94873047 C-26.91217377 58.86065094 -26.92493347 57.77257141 -26.93807983 56.65151978 C-26.94030548 55.4713327 -26.94253113 54.29114563 -26.94482422 53.07519531 C-26.95148102 51.86672943 -26.95813782 50.65826355 -26.96499634 49.41317749 C-26.97513771 46.85261562 -26.9798129 44.29202724 -26.97949219 41.73144531 C-26.98386111 37.80912764 -27.02015585 33.8879384 -27.05810547 29.96582031 C-27.06397405 27.48144917 -27.06794316 24.99707267 -27.06982422 22.51269531 C-27.08419525 21.3365567 -27.09856628 20.16041809 -27.1133728 18.94863892 C-27.10414291 17.30706314 -27.10414291 17.30706314 -27.09472656 15.63232422 C-27.0975766 14.67016998 -27.10042664 13.70801575 -27.10336304 12.71670532 C-26.46244314 9.4042772 -25.21463973 8.23950515 -22.60888672 6.16113281 C-19.13563491 5.00338221 -16.24821224 5.09246629 -12.60888672 5.16113281 C-12.32013672 4.52175781 -12.03138672 3.88238281 -11.73388672 3.22363281 C-9.30340963 -1.23224186 -4.48616301 0.00592222 0 0 Z M-20.60888672 12.16113281 C-21.54554203 14.97109874 -21.73533114 16.6789179 -21.73828125 19.58496094 C-21.74143341 20.47598511 -21.74458557 21.36700928 -21.74783325 22.28503418 C-21.74580902 23.24445923 -21.74378479 24.20388428 -21.74169922 25.19238281 C-21.74265594 26.17984497 -21.74361267 27.16730713 -21.74459839 28.18469238 C-21.74527897 30.27270573 -21.74343319 32.36072119 -21.73925781 34.44873047 C-21.73390786 37.64848575 -21.73920695 40.84810066 -21.74560547 44.04785156 C-21.74494467 46.07519562 -21.74366346 48.1025396 -21.74169922 50.12988281 C-21.74372345 51.08930786 -21.74574768 52.04873291 -21.74783325 53.03723145 C-21.74468109 53.92825562 -21.74152893 54.81927979 -21.73828125 55.73730469 C-21.73748566 56.5210144 -21.73669006 57.30472412 -21.73587036 58.11218262 C-21.68448193 60.36258079 -21.68448193 60.36258079 -20.60888672 63.16113281 C-18.29888672 63.49113281 -15.98888672 63.82113281 -13.60888672 64.16113281 C-13.60888672 46.67113281 -13.60888672 29.18113281 -13.60888672 11.16113281 C-18.23620872 10.78845482 -18.23620872 10.78845482 -20.60888672 12.16113281 Z M88.39111328 11.16113281 C88.39111328 28.65113281 88.39111328 46.14113281 88.39111328 64.16113281 C91.85611328 63.66613281 91.85611328 63.66613281 95.39111328 63.16113281 C96.32776859 60.35116689 96.5175577 58.64334773 96.52050781 55.73730469 C96.52365997 54.84628052 96.52681213 53.95525635 96.53005981 53.03723145 C96.52803558 52.0778064 96.52601135 51.11838135 96.52392578 50.12988281 C96.52488251 49.14242065 96.52583923 48.1549585 96.52682495 47.13757324 C96.52750553 45.0495599 96.52565975 42.96154444 96.52148438 40.87353516 C96.51613443 37.67377988 96.52143351 34.47416497 96.52783203 31.27441406 C96.52717123 29.24707 96.52589002 27.21972603 96.52392578 25.19238281 C96.52696213 23.75324524 96.52696213 23.75324524 96.53005981 22.28503418 C96.52690765 21.39401001 96.52375549 20.50298584 96.52050781 19.58496094 C96.51971222 18.80125122 96.51891663 18.0175415 96.51809692 17.21008301 C96.46670849 14.95968483 96.46670849 14.95968483 95.39111328 12.16113281 C93.08111328 11.83113281 90.77111328 11.50113281 88.39111328 11.16113281 Z ",
    fill: "#2B44FF",
    transform: "translate(26.60888671875,-0.1611328125)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 0 C2.52685216 2.13203151 2.91636695 3.72520568 3.875 6.875 C4.03192798 10.79819961 3.14773936 12.74136098 1 16 C-1.32726825 17.76551385 -2.97852351 17.99673184 -5.875 18.4375 C-9.24646986 17.96549422 -11.33782199 17.02559386 -13.8515625 14.69140625 C-15.73769354 11.91353298 -15.82177994 9.45387562 -15.57421875 6.1640625 C-14.8066117 3.27117607 -13.38902834 1.44373021 -10.921875 -0.25390625 C-7.20579218 -1.6965319 -3.73030435 -1.20190553 0 0 Z M-7 5 C-7.66 5.66 -8.32 6.32 -9 7 C-8.6814823 9.10820797 -8.6814823 9.10820797 -8 11 C-6.02 11.495 -6.02 11.495 -4 12 C-3.34 10.68 -2.68 9.36 -2 8 C-2.66 7.01 -3.32 6.02 -4 5 C-4.99 5 -5.98 5 -7 5 Z ",
    fill: "#2A43FF",
    transform: "translate(101,85)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 0 C4.63235294 2.26470588 4.63235294 2.26470588 6 5 C6.51968957 9.4131016 6.85380637 12.86159151 4.125 16.5 C0.5479405 19.02498318 -1.60566657 19.3446536 -6 19 C-10.63235294 16.73529412 -10.63235294 16.73529412 -12 14 C-12.51968957 9.5868984 -12.85380637 6.13840849 -10.125 2.5 C-6.5479405 -0.02498318 -4.39433343 -0.3446536 0 0 Z M-6 7 C-6 8.65 -6 10.3 -6 12 C-2.95086772 13.01111093 -2.95086772 13.01111093 0 12 C0 10.35 0 8.7 0 7 C-3.04913228 5.98888907 -3.04913228 5.98888907 -6 7 Z ",
    fill: "#2942FF",
    transform: "translate(67,84)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 0 C3.55956846 2.04345597 5.50243928 3.16565949 6.5859375 7.16015625 C6.89950969 11.63229302 6.37254916 13.52237287 3.5625 17.125 C0.09453903 19.51128743 -2.97052294 19.37415298 -7.01171875 18.640625 C-9 18 -9 18 -11 16.3125 C-12.87306099 11.98104646 -13.46302796 9.26723442 -11.8125 4.75 C-8.7223123 0.06143936 -5.53281183 -0.77459366 0 0 Z M-5 6 C-5.66 7.32 -6.32 8.64 -7 10 C-6.01 11.485 -6.01 11.485 -5 13 C-3.68 12.67 -2.36 12.34 -1 12 C-0.3185177 10.10820797 -0.3185177 10.10820797 0 8 C-0.66 7.34 -1.32 6.68 -2 6 C-2.99 6 -3.98 6 -5 6 Z ",
    fill: "#2A43FF",
    transform: "translate(36,84)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 0 C4.05338513 0.58027408 6.12175865 2.48048187 8.84765625 5.38671875 C10 7 10 7 10.25 9.5625 C8.39835201 13.17321358 6.39439895 14.73706737 3 17 C0.625 16.8125 0.625 16.8125 -1 16 C-0.835 15.2575 -0.67 14.515 -0.5 13.75 C0.13349936 10.26575352 0.05213311 7.29542094 -0.5625 3.8125 C-0.706875 2.884375 -0.85125 1.95625 -1 1 C-0.67 0.67 -0.34 0.34 0 0 Z ",
    fill: "#283FFF",
    transform: "translate(96,29)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 0 C0.59425781 0.22042969 1.18851563 0.44085937 1.80078125 0.66796875 C2.00218601 4.29325443 1.6585489 6.53298583 -0.19921875 9.66796875 C0.46078125 10.32796875 1.12078125 10.98796875 1.80078125 11.66796875 C1.42578125 14.29296875 1.42578125 14.29296875 0.80078125 16.66796875 C-2.86050627 16.45875232 -4.67870694 15.51938524 -7.07421875 12.85546875 C-9.19921875 9.66796875 -9.19921875 9.66796875 -9.0078125 7.67578125 C-8.09913717 5.419457 -7.08584609 4.0890088 -5.38671875 2.35546875 C-4.88527344 1.82308594 -4.38382813 1.29070313 -3.8671875 0.7421875 C-2.19921875 -0.33203125 -2.19921875 -0.33203125 0 0 Z ",
    fill: "#283FFF",
    transform: "translate(31.19921875,29.33203125)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 0 C1.65 0.33 3.3 0.66 5 1 C4.67 2.32 4.34 3.64 4 5 C2.35 4.67 0.7 4.34 -1 4 C-0.67 2.68 -0.34 1.36 0 0 Z ",
    fill: "#2A44FF",
    transform: "translate(62,70)"
  })),
  progressBar: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "128",
    height: "128",
    viewBox: "0 0 128 128"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 0 C0.70313324 -0.00043808 1.40626648 -0.00087616 2.13070679 -0.00132751 C4.43589849 0.00074889 6.7403468 0.02402429 9.04541016 0.04760742 C10.65108849 0.05320749 12.25677197 0.05747565 13.86245728 0.06047058 C18.07442549 0.07188708 22.28607996 0.10132638 26.4979248 0.13458252 C30.80147051 0.1653526 35.10506724 0.1789907 39.40869141 0.1940918 C47.84242862 0.22619947 56.27591153 0.27735672 64.70947266 0.34057617 C64.70947266 1.99057617 64.70947266 3.64057617 64.70947266 5.34057617 C63.39188713 5.34604462 63.39188713 5.34604462 62.04768372 5.35162354 C53.76382618 5.3895128 45.48036198 5.44637605 37.19678211 5.52447891 C32.93822007 5.56396406 28.67986512 5.59614729 24.42114258 5.61157227 C20.31008123 5.62673226 16.19958918 5.66116541 12.08878136 5.70888519 C10.52158243 5.7237059 8.95430224 5.73161759 7.38703346 5.73246002 C5.18896644 5.73482952 2.99247297 5.76190365 0.79467773 5.79467773 C-0.45552658 5.80356018 -1.7057309 5.81244263 -2.99382019 5.82159424 C-6.86516115 6.43103752 -8.54247364 7.59698739 -11.29052734 10.34057617 C-12.38896631 14.04058112 -11.78302002 17.42594691 -9.97802734 20.77807617 C-7.2228281 23.32918658 -4.60061509 23.4669414 -1.01516724 23.48101807 C-0.14319702 23.48672821 0.72877319 23.49243835 1.62716675 23.49832153 C2.5810025 23.49943939 3.53483826 23.50055725 4.51757812 23.50170898 C6.02774506 23.50915634 6.02774506 23.50915634 7.56842041 23.51675415 C10.90450723 23.53137929 14.24054652 23.53817806 17.57666016 23.54370117 C19.89210003 23.54945192 22.20753989 23.55520966 24.52297974 23.56097412 C29.38023094 23.57148483 34.23746558 23.57732718 39.09472656 23.58081055 C45.32141457 23.58629823 51.54788423 23.61033199 57.77450371 23.6387825 C62.5580001 23.65739646 67.34144374 23.6626138 72.1249733 23.66414642 C74.42070841 23.66717581 76.71644254 23.67521392 79.01214218 23.6883316 C82.22245712 23.7053673 85.43223645 23.70351782 88.64257812 23.69702148 C89.59236542 23.70623627 90.54215271 23.71545105 91.52072144 23.72494507 C96.38062574 23.694105 99.80048234 23.58113044 103.70947266 20.34057617 C105.27647708 17.20656733 105.56111826 13.70902522 104.70947266 10.34057617 C100.86746043 6.52484554 98.22558443 5.82544158 92.87744141 5.73120117 C90.93901367 5.68286133 90.93901367 5.68286133 88.96142578 5.63354492 C87.60661257 5.61880267 86.25179468 5.60448505 84.89697266 5.59057617 C83.52258626 5.56239858 82.14823461 5.53246863 80.77392578 5.50073242 C77.41904856 5.43010343 74.0648637 5.37736844 70.70947266 5.34057617 C70.14697266 3.40307617 70.14697266 3.40307617 69.70947266 1.34057617 C72.30871822 -1.25866939 79.54907925 0.1107104 83.27270508 0.1003418 C85.37118049 0.09069474 87.46865173 0.05971418 89.56689453 0.02807617 C90.90998768 0.02154019 92.25308784 0.01629206 93.59619141 0.01245117 C95.42476685 -0.00156738 95.42476685 -0.00156738 97.2902832 -0.01586914 C102.35951975 0.51259108 105.59044013 2.1626472 109.08447266 5.84057617 C111.36376524 10.74982173 111.4860839 15.01524191 110.70947266 20.34057617 C108.35002608 25.4224611 105.8604676 27.32971514 100.70947266 29.34057617 C97.21299495 29.77325466 93.74508562 29.7608414 90.2253418 29.74462891 C88.6608152 29.75492378 88.6608152 29.75492378 87.06468201 29.76542664 C83.62452496 29.78369458 80.18482395 29.77985701 76.74462891 29.77416992 C74.34858553 29.77873168 71.95254346 29.78403723 69.5565033 29.79005432 C64.53720786 29.79898542 59.51807153 29.79656214 54.4987793 29.78662109 C48.07160354 29.7751311 41.64497716 29.79534403 35.21787357 29.82453823 C30.27042664 29.84289779 25.32311142 29.84260821 20.37563896 29.83690071 C18.00620185 29.83674747 15.63675583 29.84279402 13.26735115 29.85519218 C9.95221771 29.87009523 6.63810004 29.85942907 3.32299805 29.84228516 C1.86006821 29.85678711 1.86006821 29.85678711 0.36758423 29.87158203 C-5.71884445 29.80578444 -9.29915598 28.88031206 -14.29052734 25.34057617 C-17.94012679 21.45551869 -17.79589364 17.09545259 -17.63818359 12.00073242 C-17.1395906 8.18565567 -15.92783928 6.116694 -13.29052734 3.34057617 C-8.71139582 0.56028353 -5.32300209 -0.0280158 0 0 Z ",
    fill: "#2A44FF",
    transform: "translate(17.29052734375,32.659423828125)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 0 C0.71288681 -0.00029205 1.42577362 -0.00058411 2.16026306 -0.00088501 C4.4977571 0.0004994 6.83492547 0.01601818 9.17236328 0.03173828 C10.80046413 0.03547158 12.42856724 0.03831706 14.05667114 0.04031372 C18.32774126 0.04792523 22.59867389 0.06755222 26.86968994 0.08972168 C31.23358297 0.11023375 35.59749837 0.11932688 39.96142578 0.12939453 C48.51357198 0.1508006 57.06560675 0.18490636 65.61767578 0.22705078 C66.11267578 2.70205078 66.11267578 2.70205078 66.61767578 5.22705078 C65.7017012 5.23291702 64.78572662 5.23878326 63.84199524 5.24482727 C55.2050039 5.30275817 46.56827106 5.37483726 37.93153095 5.46276569 C33.49140046 5.50747162 29.05136178 5.54672721 24.61108398 5.57348633 C20.32504217 5.59951717 16.03935358 5.63991787 11.7535305 5.69023705 C10.11933985 5.70690728 8.4850881 5.7184206 6.85082436 5.72466469 C4.55959774 5.7343043 2.26927508 5.76236038 -0.02172852 5.79467773 C-1.97697701 5.81133232 -1.97697701 5.81133232 -3.97172546 5.82832336 C-7.59195914 6.25155885 -9.50112385 7.03719463 -12.38232422 9.22705078 C-13.95403418 12.37047071 -13.61408205 15.78476529 -13.38232422 19.22705078 C-13.05232422 20.21705078 -12.72232422 21.20705078 -12.38232422 22.22705078 C-9.56410509 23.16645716 -7.85698788 23.35264268 -4.94165039 23.35403442 C-4.03313324 23.35685425 -3.12461609 23.35967407 -2.18856812 23.36257935 C-1.19418732 23.36055511 -0.19980652 23.35853088 0.82470703 23.35644531 C1.87371185 23.35819763 2.92271667 23.35994995 4.00350952 23.36175537 C7.47908166 23.36616499 10.95460311 23.36323899 14.43017578 23.35986328 C16.84008799 23.36053658 19.25000013 23.36150681 21.65991211 23.36276245 C26.71387376 23.36423822 31.76781775 23.36208873 36.82177734 23.35742188 C43.30865382 23.35172467 49.79548893 23.35500432 56.28236389 23.36099434 C61.25964674 23.3646032 66.23691974 23.36345986 71.21420288 23.36086655 C73.60647588 23.36019818 75.99874976 23.36102256 78.39102173 23.3633461 C81.73092019 23.36587792 85.07075111 23.36202447 88.41064453 23.35644531 C89.40502533 23.35846954 90.39940613 23.36049377 91.42391968 23.36257935 C92.7866954 23.35834961 92.7866954 23.35834961 94.17700195 23.35403442 C95.36165291 23.35346889 95.36165291 23.35346889 96.57023621 23.35289192 C98.81938985 23.30283128 98.81938985 23.30283128 101.61767578 22.22705078 C102.85033581 18.5290707 103.19904417 15.07183375 102.61767578 11.22705078 C100.74752484 8.79585456 99.33629233 7.58635906 96.61767578 6.22705078 C94.65993509 6.07326226 92.69750226 5.97733615 90.73486328 5.91064453 C89.56826172 5.86875 88.40166016 5.82685547 87.19970703 5.78369141 C85.97638672 5.744375 84.75306641 5.70505859 83.49267578 5.66455078 C82.26162109 5.62136719 81.03056641 5.57818359 79.76220703 5.53369141 C76.71414725 5.42736374 73.66600388 5.32533297 70.61767578 5.22705078 C70.94767578 3.57705078 71.27767578 1.92705078 71.61767578 0.22705078 C75.63837003 0.1394001 79.65881588 0.0864406 83.68017578 0.03955078 C85.38077148 0.0018457 85.38077148 0.0018457 87.11572266 -0.03662109 C95.14984451 -0.10689038 100.28121688 0.38751129 106.55517578 5.72705078 C109.3175119 9.38577412 109.25715515 13.15325034 109.03955078 17.60205078 C108.2902983 22.26406623 106.20704312 24.92040715 102.6337738 27.85804749 C98.14154571 29.89706446 93.9269903 29.65304292 89.04760742 29.63110352 C87.45162971 29.64139839 87.45162971 29.64139839 85.82341003 29.65190125 C82.30808142 29.67019492 78.79319801 29.66632793 75.27783203 29.66064453 C72.83312332 29.66520507 70.38841589 29.67051027 67.94371033 29.67652893 C62.82008659 29.6854651 57.69661867 29.68303101 52.57299805 29.6730957 C46.00781599 29.66160549 39.44317174 29.68181643 32.87806034 29.71101284 C27.82942794 29.72936063 22.78092475 29.72908516 17.73226738 29.72337532 C15.31176435 29.72322193 12.89125266 29.72928056 10.47078133 29.74166679 C7.08589076 29.75654748 3.70199806 29.74592004 0.31713867 29.72875977 C-0.68201569 29.73842773 -1.68117004 29.7480957 -2.71060181 29.75805664 C-8.59468911 29.69560658 -11.87176471 29.09114446 -16.38232422 25.22705078 C-19.93339558 21.32087229 -20.00666671 17.03420709 -19.86279297 11.95751953 C-19.09456691 7.59174704 -16.97805305 4.7647771 -13.38232422 2.22705078 C-8.78914239 0.3782889 -4.93368817 -0.01707159 0 0 Z ",
    fill: "#2B44FF",
    transform: "translate(19.38232421875,65.77294921875)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 0 C1.17086655 -0.00021904 1.17086655 -0.00021904 2.36538696 -0.0004425 C4.95178991 0.00025553 7.53812131 0.00804282 10.12451172 0.01586914 C11.91527263 0.01773371 13.70603405 0.01915743 15.49679565 0.02015686 C20.21504113 0.02397898 24.93325592 0.03380668 29.65148926 0.04486084 C34.46410711 0.05508151 39.2767299 0.05965589 44.08935547 0.06469727 C53.53598355 0.07542921 62.98258883 0.09250199 72.42919922 0.11352539 C72.42919922 1.43352539 72.42919922 2.75352539 72.42919922 4.11352539 C71.06189919 4.12232475 71.06189919 4.12232475 69.66697693 4.13130188 C61.06004149 4.18930041 52.45336357 4.26141824 43.84667873 4.3492403 C39.42229994 4.39389255 34.99801213 4.43315989 30.57348633 4.45996094 C26.300404 4.48604543 22.02767277 4.5264839 17.75480843 4.57671165 C16.12785281 4.59334566 14.50083652 4.60488148 12.87380791 4.6111393 C10.58778292 4.62081846 8.30264915 4.64892137 6.0168457 4.68115234 C4.71778793 4.6922554 3.41873016 4.70335846 2.08030701 4.71479797 C-2.14188136 5.17589153 -4.81469861 6.16999078 -8.57080078 8.11352539 C-10.16955429 11.3110324 -10.07246402 14.6431153 -9.57080078 18.11352539 C-7.2401552 21.35978174 -5.40063972 22.3721412 -1.57080078 23.11352539 C-0.16285865 23.20448339 1.24863483 23.24817578 2.65950012 23.25396729 C3.49629807 23.25967743 4.33309601 23.26538757 5.19525146 23.27127075 C6.1049469 23.27238861 7.01464233 23.27350647 7.9519043 23.2746582 C9.39894997 23.28210556 9.39894997 23.28210556 10.87522888 23.28970337 C14.06640334 23.30430734 17.25752809 23.31112402 20.44873047 23.31665039 C22.66826885 23.32240321 24.88780722 23.32816093 27.10734558 23.33392334 C31.76191438 23.34442825 36.41646594 23.35027429 41.07104492 23.35375977 C47.02959182 23.35924393 52.98791015 23.38327264 58.94638538 23.41173172 C63.53180097 23.43037282 68.11716165 23.43556449 72.70261192 23.43709564 C74.89900652 23.44011927 77.09540022 23.44813798 79.29175758 23.46128082 C82.36745125 23.47837205 85.44258841 23.4764534 88.51831055 23.4699707 C89.42193329 23.47918549 90.32555603 23.48840027 91.25656128 23.49789429 C96.72589175 23.46185848 100.59730083 22.74485665 105.42919922 20.11352539 C107.02795273 16.91601838 106.93086246 13.58393548 106.42919922 10.11352539 C104.09474625 6.86196589 102.26232804 5.85419143 98.42919922 5.11352539 C96.69757532 4.96979309 94.96221589 4.86777607 93.22607422 4.79711914 C92.24638672 4.75522461 91.26669922 4.71333008 90.25732422 4.67016602 C89.24154297 4.63084961 88.22576172 4.5915332 87.17919922 4.55102539 C86.14794922 4.5078418 85.11669922 4.4646582 84.05419922 4.42016602 C81.51266052 4.31426857 78.97102726 4.21219096 76.42919922 4.11352539 C76.42919922 2.79352539 76.42919922 1.47352539 76.42919922 0.11352539 C80.94953978 -0.06149028 85.46900369 -0.16757782 89.99169922 -0.26147461 C91.90692383 -0.33688477 91.90692383 -0.33688477 93.86083984 -0.41381836 C104.49739599 -0.57958287 104.49739599 -0.57958287 108.76904297 3.01196289 C112.90473836 7.33072334 112.87603277 11.21252083 112.85498047 17.05102539 C112.2122954 21.67364097 110.00472714 24.25125045 106.42919922 27.11352539 C104.06577982 28.29523509 102.62073085 28.25192328 99.98384094 28.27415466 C99.04882248 28.28420029 98.11380402 28.29424591 97.15045166 28.30459595 C96.12135681 28.31042694 95.09226196 28.31625793 94.03198242 28.32226562 C92.95053452 28.33204941 91.86908661 28.34183319 90.75486755 28.35191345 C87.16325114 28.3819143 83.5716721 28.40326681 79.97998047 28.42211914 C78.75490469 28.42869097 77.52982891 28.43526279 76.26762962 28.44203377 C70.45146819 28.47128332 64.63532245 28.49519924 58.81911308 28.51246589 C52.77881781 28.5307832 46.73903485 28.56409572 40.69897461 28.62109375 C34.21919195 28.68124137 27.73989619 28.71202364 21.25984764 28.72172737 C18.78988167 28.73029317 16.3199291 28.74913863 13.85012245 28.77847099 C10.39063349 28.81734223 6.93304384 28.81842465 3.47338867 28.81054688 C2.45441498 28.83054749 1.43544128 28.8505481 0.3855896 28.87115479 C-5.67001746 28.8093101 -8.95893681 27.87837803 -13.33016682 23.59683323 C-16.42767345 19.89343965 -16.01330957 15.8151289 -15.99658203 11.17602539 C-15.35389696 6.55340982 -13.1463287 3.97580033 -9.57080078 1.11352539 C-6.520611 -0.4115695 -3.34530465 -0.01623405 0 0 Z ",
    fill: "#2A44FF",
    transform: "translate(15.57080078125,-0.113525390625)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 0 C0.70744354 0.00141495 1.41488708 0.0028299 2.14376831 0.00428772 C4.40578419 0.00989025 6.66770148 0.02244307 8.9296875 0.03515625 C10.46223815 0.04017093 11.99479036 0.04473389 13.52734375 0.04882812 C17.28649638 0.05986048 21.04557522 0.07712673 24.8046875 0.09765625 C24.8046875 1.41765625 24.8046875 2.73765625 24.8046875 4.09765625 C24.05372803 4.11223877 23.30276855 4.12682129 22.52905273 4.1418457 C19.09960088 4.21669223 15.67108355 4.31323279 12.2421875 4.41015625 C11.06076172 4.43271484 9.87933594 4.45527344 8.66210938 4.47851562 C2.37447095 4.67225238 -2.69680167 4.90268224 -8.1953125 8.09765625 C-9.79406601 11.29516326 -9.69697574 14.62724616 -9.1953125 18.09765625 C-6.86466691 21.3439126 -5.02515144 22.35627206 -1.1953125 23.09765625 C0.21262963 23.18861424 1.62412311 23.23230664 3.0349884 23.23809814 C3.87178635 23.24380829 4.70858429 23.24951843 5.57073975 23.25540161 C6.48043518 23.25651947 7.39013062 23.25763733 8.32739258 23.25878906 C9.77443825 23.26623642 9.77443825 23.26623642 11.25071716 23.27383423 C14.44189162 23.2884382 17.63301637 23.29525487 20.82421875 23.30078125 C23.04375713 23.30653407 25.2632955 23.31229179 27.48283386 23.3180542 C32.13740266 23.32855911 36.79195422 23.33440515 41.4465332 23.33789062 C47.4050801 23.34337479 53.36339843 23.3674035 59.32187366 23.39586258 C63.90728925 23.41450368 68.49264993 23.41969535 73.0781002 23.4212265 C75.27449481 23.42425013 77.47088851 23.43226884 79.66724586 23.44541168 C82.74293953 23.46250291 85.81807669 23.46058426 88.89379883 23.45410156 C89.79742157 23.46331635 90.70104431 23.47253113 91.63204956 23.48202515 C97.10138003 23.44598933 100.97278911 22.72898751 105.8046875 20.09765625 C107.40344101 16.90014924 107.30635074 13.56806634 106.8046875 10.09765625 C104.47491006 6.8526091 102.6449215 5.79759011 98.8046875 5.09765625 C96.57451628 4.98244089 94.34135621 4.92127973 92.10839844 4.89233398 C91.44457153 4.88243439 90.78074463 4.87253479 90.09680176 4.86233521 C87.91092448 4.83084365 85.7250255 4.80601188 83.5390625 4.78125 C82.02019701 4.7606698 80.50133712 4.73967304 78.98248291 4.71827698 C74.99097225 4.66316641 70.99941085 4.61370872 67.0078125 4.56542969 C62.9322459 4.51513408 58.8567527 4.45949014 54.78125 4.40429688 C46.78912462 4.29685009 38.79693771 4.19537538 30.8046875 4.09765625 C30.8046875 2.77765625 30.8046875 1.45765625 30.8046875 0.09765625 C40.33204608 -0.04160292 49.85905226 -0.14809507 59.38720798 -0.21321678 C63.81197216 -0.24447846 68.23603806 -0.28685513 72.66040039 -0.35498047 C76.93336242 -0.42035992 81.20565454 -0.45608861 85.47907829 -0.47160721 C87.1061857 -0.48266049 88.73325803 -0.50424591 90.36007881 -0.53672409 C104.70912399 -0.81169708 104.70912399 -0.81169708 109.29663086 3.00927734 C113.17883017 7.7897525 113.25234472 10.96822063 113.23046875 17.03515625 C112.58778368 21.65777183 110.38021542 24.23538131 106.8046875 27.09765625 C104.4412681 28.27936595 102.99621913 28.23605414 100.35932922 28.25828552 C99.42431076 28.26833115 98.4892923 28.27837677 97.52593994 28.28872681 C96.49684509 28.2945578 95.46775024 28.30038879 94.4074707 28.30639648 C93.3260228 28.31618027 92.24457489 28.32596405 91.13035583 28.33604431 C87.53873942 28.36604516 83.94716039 28.38739767 80.35546875 28.40625 C79.13039297 28.41282183 77.90531719 28.41939365 76.6431179 28.42616463 C70.82695647 28.45541418 65.01081073 28.4793301 59.19460136 28.49659675 C53.15430609 28.51491406 47.11452313 28.54822658 41.07446289 28.60522461 C34.59468023 28.66537223 28.11538447 28.6961545 21.63533592 28.70585823 C19.16536996 28.71442403 16.69541738 28.73326949 14.22561073 28.76260185 C10.76612177 28.80147309 7.30853212 28.80255551 3.84887695 28.79467773 C2.82990326 28.81467834 1.81092957 28.83467896 0.76107788 28.85528564 C-5.29452918 28.79344096 -8.58344853 27.86250889 -12.95467854 23.58096409 C-16.05218517 19.8775705 -15.63782129 15.79925976 -15.62109375 11.16015625 C-14.97840868 6.53754067 -12.77084042 3.95993119 -9.1953125 1.09765625 C-6.23720774 -0.38139613 -3.240597 -0.02425278 0 0 Z ",
    fill: "#2A44FF",
    transform: "translate(15.1953125,99.90234375)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 0 C1.36377274 0.01078583 1.36377274 0.01078583 2.75509644 0.02178955 C4.18930939 0.02135147 4.18930939 0.02135147 5.65249634 0.02090454 C8.82334363 0.02230157 11.993958 0.03788034 15.1647644 0.05352783 C17.35908886 0.05725663 19.55341498 0.06010423 21.7477417 0.06210327 C27.53132704 0.06975018 33.3148124 0.08940775 39.09835815 0.11151123 C44.99678189 0.13194691 50.89522174 0.14110011 56.79367065 0.15118408 C68.37314174 0.17265264 79.95253852 0.20680132 91.5319519 0.24884033 C91.5319519 4.20884033 91.5319519 8.16884033 91.5319519 12.24884033 C78.78889566 12.29510395 66.04585928 12.33067906 53.30273628 12.35246468 C47.3861101 12.36291867 41.4695412 12.37710728 35.552948 12.39971924 C29.84714059 12.42139009 24.14138843 12.43339677 18.43554306 12.43859482 C16.25455734 12.44230095 14.07357477 12.4495377 11.89261246 12.46030045 C8.8467064 12.47473885 5.80103099 12.47682149 2.75509644 12.47589111 C1.84591461 12.48308167 0.93673279 12.49027222 0 12.49768066 C-6.23994377 12.47694465 -6.23994377 12.47694465 -8.4680481 10.24884033 C-8.7336731 8.37384033 -8.7336731 8.37384033 -8.7180481 6.24884033 C-8.72320435 5.54759033 -8.7283606 4.84634033 -8.7336731 4.12384033 C-8.03390546 -0.81569589 -4.04191601 0.01343172 0 0 Z M-2.4680481 4.24884033 C-2.4680481 5.56884033 -2.4680481 6.88884033 -2.4680481 8.24884033 C27.2319519 8.24884033 56.9319519 8.24884033 87.5319519 8.24884033 C87.5319519 6.92884033 87.5319519 5.60884033 87.5319519 4.24884033 C57.8319519 4.24884033 28.1319519 4.24884033 -2.4680481 4.24884033 Z ",
    fill: "#2B44FF",
    transform: "translate(16.468048095703125,107.75115966796875)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 0 C1.11015472 -0.00306656 1.11015472 -0.00306656 2.24273682 -0.00619507 C4.68925676 -0.00920354 7.13510315 0.00927271 9.58154297 0.02832031 C11.27879672 0.03137743 12.97605298 0.03325391 14.67330933 0.03399658 C18.22924406 0.03859975 21.78495233 0.05302822 25.34082031 0.07519531 C29.90875544 0.10352075 34.47651244 0.11441102 39.04452705 0.11887741 C42.54798174 0.12302479 46.05140008 0.13283582 49.55483627 0.1447525 C51.23982323 0.15046612 52.9248137 0.1552212 54.60980606 0.15901947 C56.9586839 0.16586004 59.30741776 0.17948063 61.65625 0.1953125 C62.35859772 0.19643036 63.06094543 0.19754822 63.78457642 0.19869995 C68.58404087 0.24175571 68.58404087 0.24175571 69.69873047 1.35644531 C69.79724218 3.18760414 69.82845676 5.02264465 69.82373047 6.85644531 C69.82759766 8.35691406 69.82759766 8.35691406 69.83154297 9.88769531 C69.69873047 12.35644531 69.69873047 12.35644531 68.69873047 13.35644531 C66.3419025 13.46732028 64.01409412 13.51382537 61.65625 13.51757812 C60.91965149 13.52254303 60.18305298 13.52750793 59.4241333 13.53262329 C56.97659384 13.54728112 54.52911919 13.55405304 52.08154297 13.55957031 C50.38622027 13.56531898 48.69089759 13.57107675 46.99557495 13.57684326 C43.43617448 13.5873637 39.87679666 13.59319946 36.31738281 13.59667969 C31.75173166 13.6021653 27.18637862 13.6261902 22.620821 13.65465164 C19.11729045 13.6732569 15.61383198 13.6784825 12.1102562 13.68001556 C10.42690273 13.68304764 8.74355069 13.69109479 7.06024551 13.70420074 C4.70659849 13.72121688 2.35368323 13.71939216 0 13.71289062 C-0.69829926 13.72210541 -1.39659851 13.73132019 -2.11605835 13.74081421 C-4.93771266 13.71634312 -6.85939843 13.65443989 -9.23416138 12.05291748 C-11.04477238 9.1744359 -10.65354028 6.6443056 -10.30126953 3.35644531 C-7.83774855 -0.56002254 -4.18014476 -0.05516134 0 0 Z M-5.30126953 5.35644531 C-5.30126953 6.34644531 -5.30126953 7.33644531 -5.30126953 8.35644531 C17.79873047 8.35644531 40.89873047 8.35644531 64.69873047 8.35644531 C64.69873047 7.36644531 64.69873047 6.37644531 64.69873047 5.35644531 C41.59873047 5.35644531 18.49873047 5.35644531 -5.30126953 5.35644531 Z ",
    fill: "#2A44FF",
    transform: "translate(18.30126953125,40.6435546875)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 0 C1.64641731 -0.00450165 1.64641731 -0.00450165 3.32609558 -0.00909424 C4.50537125 0.00325256 5.68464691 0.01559937 6.8996582 0.02832031 C8.11240921 0.03019348 9.32516022 0.03206665 10.57466125 0.03399658 C13.13590243 0.04071665 15.69713335 0.05463014 18.25830078 0.07519531 C22.19548998 0.10640608 26.13227933 0.11617137 30.06958008 0.12207031 C32.55461104 0.13123777 35.03963791 0.14161272 37.5246582 0.15332031 C39.30268074 0.15969513 39.30268074 0.15969513 41.11662292 0.16619873 C42.74885551 0.18061005 42.74885551 0.18061005 44.4140625 0.1953125 C45.85823799 0.2055545 45.85823799 0.2055545 47.33158875 0.21600342 C49.51293945 0.35644531 49.51293945 0.35644531 50.51293945 1.35644531 C50.58537998 3.3760873 50.59671133 5.39811655 50.57543945 7.41894531 C50.56641602 8.52367188 50.55739258 9.62839844 50.5480957 10.76660156 C50.53649414 11.62125 50.52489258 12.47589844 50.51293945 13.35644531 C43.13290269 13.40277639 35.75289727 13.4383184 28.37274456 13.46006966 C24.94587252 13.47050894 21.51909995 13.48467063 18.09228516 13.50732422 C14.15308826 13.53320217 10.21393171 13.54291693 6.2746582 13.55175781 C5.04333664 13.56208038 3.81201508 13.57240295 2.54338074 13.58303833 C1.40242447 13.58318939 0.2614682 13.58334045 -0.9140625 13.58349609 C-1.91999954 13.58793732 -2.92593658 13.59237854 -3.96235657 13.59695435 C-6.48706055 13.35644531 -6.48706055 13.35644531 -9.48706055 11.35644531 C-10.1035654 5.80790162 -10.1035654 5.80790162 -9.48706055 3.35644531 C-6.38417442 0.41357116 -4.21401757 -0.01591714 0 0 Z M-3.48706055 5.35644531 C-3.81706055 6.34644531 -4.14706055 7.33644531 -4.48706055 8.35644531 C12.34293945 8.35644531 29.17293945 8.35644531 46.51293945 8.35644531 C46.51293945 7.36644531 46.51293945 6.37644531 46.51293945 5.35644531 C30.01293945 5.35644531 13.51293945 5.35644531 -3.48706055 5.35644531 Z ",
    fill: "#2B44FF",
    transform: "translate(17.487060546875,73.6435546875)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 0 C0.79497894 0.00444122 1.58995789 0.00888245 2.4090271 0.01345825 C3.76020126 0.01368484 3.76020126 0.01368484 5.13867188 0.01391602 C6.11266937 0.02423859 7.08666687 0.03456116 8.09017944 0.04519653 C9.08617157 0.04802643 10.0821637 0.05085632 11.1083374 0.05377197 C14.29771813 0.06499063 17.48682072 0.09009822 20.67611694 0.11550903 C22.83496706 0.12553666 24.99382157 0.13466288 27.15267944 0.14285278 C32.45226621 0.16493548 37.75164438 0.19947679 43.05111694 0.24050903 C43.05111694 4.20050903 43.05111694 8.16050903 43.05111694 12.24050903 C36.67905821 12.289846 30.30710999 12.32619855 23.93490601 12.35037231 C21.765941 12.36044692 19.59698963 12.37410701 17.42807007 12.39138794 C14.31540569 12.41557226 11.20292043 12.42697736 8.09017944 12.43582153 C7.11618195 12.4461441 6.14218445 12.45646667 5.13867188 12.46710205 C4.2378891 12.46725311 3.33710632 12.46740417 2.4090271 12.46755981 C1.21655869 12.47422165 1.21655869 12.47422165 0 12.48101807 C-1.94888306 12.24050903 -1.94888306 12.24050903 -3.94888306 10.24050903 C-4.21450806 8.36550903 -4.21450806 8.36550903 -4.19888306 6.24050903 C-4.20403931 5.53925903 -4.20919556 4.83800903 -4.21450806 4.11550903 C-3.82257631 1.34893199 -2.76171279 0.34081926 0 0 Z M2.05111694 4.24050903 C2.05111694 5.56050903 2.05111694 6.88050903 2.05111694 8.24050903 C13.93111694 8.24050903 25.81111694 8.24050903 38.05111694 8.24050903 C38.05111694 6.92050903 38.05111694 5.60050903 38.05111694 4.24050903 C26.17111694 4.24050903 14.29111694 4.24050903 2.05111694 4.24050903 Z ",
    fill: "#2B44FF",
    transform: "translate(11.948883056640625,7.759490966796875)"
  })),
  startRating: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "128",
    height: "128",
    viewBox: "0 0 128 128"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 0 C1.58179615 -0.10867302 3.16577153 -0.18589827 4.75 -0.25 C5.63171875 -0.29640625 6.5134375 -0.3428125 7.421875 -0.390625 C10 0 10 0 12.3125 1.5625 C14.62844328 4.9077514 14.39910904 7.22405587 14.25 11.25 C14.21390625 12.51328125 14.1778125 13.7765625 14.140625 15.078125 C14.09421875 16.04234375 14.0478125 17.0065625 14 18 C15.78857422 17.96519531 15.78857422 17.96519531 17.61328125 17.9296875 C19.17968124 17.91092822 20.746088 17.89272819 22.3125 17.875 C23.09818359 17.85824219 23.88386719 17.84148437 24.69335938 17.82421875 C25.45068359 17.81777344 26.20800781 17.81132813 26.98828125 17.8046875 C28.03302612 17.78897705 28.03302612 17.78897705 29.09887695 17.77294922 C31 18 31 18 34 20 C34.47114738 22.7427508 34.17805784 25.19558897 34 28 C33.505 28.495 33.505 28.495 33 29 C32.90323767 30.67233812 32.86799627 32.34832454 32.859375 34.0234375 C32.84003906 35.044375 32.82070312 36.0653125 32.80078125 37.1171875 C32.76705176 39.28106391 32.74870744 41.4452373 32.74609375 43.609375 C32.70935547 45.14464844 32.70935547 45.14464844 32.671875 46.7109375 C32.6625293 47.65243652 32.65318359 48.59393555 32.64355469 49.56396484 C32 52 32 52 29.82421875 53.80566406 C26.70389423 55.12522039 24.51845874 55.38707343 21.140625 55.3984375 C20.02429688 55.40230469 18.90796875 55.40617187 17.7578125 55.41015625 C16.60023437 55.39855469 15.44265625 55.38695312 14.25 55.375 C13.10789063 55.38660156 11.96578125 55.39820313 10.7890625 55.41015625 C4.71298531 55.38920426 -0.22987002 54.87821191 -5.89550781 52.69482422 C-9.53019604 51.49478678 -13.20019867 51.46882225 -17 51.375 C-24.89207531 51.10792469 -24.89207531 51.10792469 -26 50 C-26.0883967 47.6243148 -26.11530305 45.27791326 -26.09765625 42.90234375 C-26.0962413 42.19348526 -26.09482635 41.48462677 -26.09336853 40.75428772 C-26.08775443 38.48198288 -26.07519963 36.20977525 -26.0625 33.9375 C-26.05748681 32.40039204 -26.05292359 30.86328255 -26.04882812 29.32617188 C-26.03778042 25.55074358 -26.02050641 21.77538829 -26 18 C-24.83082031 17.97421875 -23.66164062 17.9484375 -22.45703125 17.921875 C-20.90881774 17.86557633 -19.3606421 17.80822938 -17.8125 17.75 C-16.65911133 17.72873047 -16.65911133 17.72873047 -15.48242188 17.70703125 C-10.43962208 17.49060207 -7.65773623 16.78483903 -4 13 C-1.8721284 8.96824328 -1.04764976 4.41509541 0 0 Z M4 5 C3.84144531 5.66386719 3.68289062 6.32773438 3.51953125 7.01171875 C2.02185586 12.67971676 0.67350504 16.1653292 -4 20 C-6.25615026 21.82891377 -6.25615026 21.82891377 -6.22705078 24.52197266 C-6.21657715 25.5588623 -6.20610352 26.59575195 -6.1953125 27.6640625 C-6.18886719 28.78554687 -6.18242188 29.90703125 -6.17578125 31.0625 C-6.15902344 32.238125 -6.14226563 33.41375 -6.125 34.625 C-6.11597656 35.80835937 -6.10695313 36.99171875 -6.09765625 38.2109375 C-6.07402812 41.14082523 -6.04108514 44.0703134 -6 47 C0.54907281 50.62147568 6.58116661 50.35060233 13.9375 50.1875 C15.09830078 50.17396484 16.25910156 50.16042969 17.45507812 50.14648438 C20.30387052 50.1113141 23.15168844 50.06209287 26 50 C26.33 49.01 26.66 48.02 27 47 C26.01 46.505 26.01 46.505 25 46 C24.375 43.9375 24.375 43.9375 24 42 C25.485 41.505 25.485 41.505 27 41 C27 40.34 27 39.68 27 39 C26.01 38.505 26.01 38.505 25 38 C24.375 35.9375 24.375 35.9375 24 34 C24.99 33.67 25.98 33.34 27 33 C27 32.34 27 31.68 27 31 C26.34 30.67 25.68 30.34 25 30 C24.375 27.9375 24.375 27.9375 24 26 C25.65 25.67 27.3 25.34 29 25 C29 24.34 29 23.68 29 23 C23.06 22.67 17.12 22.34 11 22 C10.8046875 18.45182292 10.609375 14.90364583 10.4140625 11.35546875 C10.23897061 7.87244766 10.23897061 7.87244766 8 5 C6.68 5 5.36 5 4 5 Z M-22 23 C-22 30.59 -22 38.18 -22 46 C-18.04 46 -14.08 46 -10 46 C-10 38.41 -10 30.82 -10 23 C-13.96 23 -17.92 23 -22 23 Z ",
    fill: "#2A43FF",
    transform: "translate(60,58)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 0 C1.98 0 3.96 0 6 0 C6.99 2.97 7.98 5.94 9 9 C11.1965625 8.9690625 11.1965625 8.9690625 13.4375 8.9375 C14.95832518 8.91607993 16.48071962 8.92820036 18 9 C19 10 19 10 19.375 12.3125 C19.189375 13.6428125 19.189375 13.6428125 19 15 C18.154375 15.556875 17.30875 16.11375 16.4375 16.6875 C15.633125 17.450625 14.82875 18.21375 14 19 C13.95628707 21.68834514 14.31089614 24.11635196 14.80078125 26.7578125 C14.89939453 27.86769531 14.89939453 27.86769531 15 29 C13 31 13 31 10.625 31.3125 C8 31 8 31 6 29.375 C5.34 28.92125 4.68 28.4675 4 28 C1.60736593 28.66771183 -0.22097385 29.22097385 -2 31 C-4.4375 31.1875 -4.4375 31.1875 -7 31 C-7.66 30.34 -8.32 29.68 -9 29 C-8.80078125 26.7578125 -8.80078125 26.7578125 -8.3125 24.125 C-7.9022173 21.46268025 -7.9022173 21.46268025 -8 19 C-10.34079757 16.64352999 -10.34079757 16.64352999 -13 15 C-13.375 12.3125 -13.375 12.3125 -13 10 C-12 9 -12 9 -9.93359375 8.90234375 C-6.46679688 8.95117188 -6.46679688 8.95117188 -3 9 C-2.01 6.03 -1.02 3.06 0 0 Z M2 8 C1.95875 8.61875 1.9175 9.2375 1.875 9.875 C1.58625 10.57625 1.2975 11.2775 1 12 C-2.0625 13.25 -2.0625 13.25 -5 14 C-4.505 14.350625 -4.01 14.70125 -3.5 15.0625 C-1.26936034 17.94374289 -1.80019379 20.47009026 -2 24 C-1.01 23.34 -0.02 22.68 1 22 C3.63434254 22.32126128 5.62710097 22.81355048 8 24 C7.938125 22.906875 7.87625 21.81375 7.8125 20.6875 C8 17 8 17 9.5 15.0625 C9.995 14.711875 10.49 14.36125 11 14 C10.030625 13.7525 9.06125 13.505 8.0625 13.25 C7.051875 12.8375 6.04125 12.425 5 12 C4.125 9.875 4.125 9.875 4 8 C3.34 8 2.68 8 2 8 Z ",
    fill: "#2A43FF",
    transform: "translate(61,18)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 0 C2.4375 0.125 2.4375 0.125 5 1 C5.268125 1.804375 5.53625 2.60875 5.8125 3.4375 C6.70760399 6.13152972 6.70760399 6.13152972 8.89453125 6.7734375 C10.91225849 7.26108436 12.95610075 7.63737271 15 8 C15.25 10.75 15.25 10.75 15 14 C14.319375 14.66 13.63875 15.32 12.9375 16 C12.298125 16.66 11.65875 17.32 11 18 C11.2397871 21.10615338 11.2397871 21.10615338 12 24 C11.67 24.66 11.34 25.32 11 26 C7.05272412 26.17942163 4.4019487 26.09350689 1 24 C0.34 24.66 -0.32 25.32 -1 26 C-4.125 26.125 -4.125 26.125 -7 26 C-7.84454356 22.62182575 -8.10844919 20.32534757 -7 17 C-8.65 15.68 -10.3 14.36 -12 13 C-11.625 10.5625 -11.625 10.5625 -11 8 C-8.29120665 6.64560332 -5.99066732 6.93498549 -3 7 C-2.690625 6.030625 -2.38125 5.06125 -2.0625 4.0625 C-1 1 -1 1 0 0 Z M1 10 C1 10.66 1 11.32 1 12 C-0.65 12 -2.3 12 -4 12 C-3.34 12.66 -2.68 13.32 -2 14 C-1.375 16.125 -1.375 16.125 -1 18 C0.98 18 2.96 18 5 18 C5.12375 17.38125 5.2475 16.7625 5.375 16.125 C6 14 6 14 8 12 C6.35 12 4.7 12 3 12 C3 11.34 3 10.68 3 10 C2.34 10 1.68 10 1 10 Z ",
    fill: "#2B44FF",
    transform: "translate(109,58)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 0 C2.4375 0.125 2.4375 0.125 5 1 C5.268125 1.804375 5.53625 2.60875 5.8125 3.4375 C6.70760399 6.13152972 6.70760399 6.13152972 8.89453125 6.7734375 C10.91225849 7.26108436 12.95610075 7.63737271 15 8 C15.25 10.75 15.25 10.75 15 14 C14.319375 14.66 13.63875 15.32 12.9375 16 C12.298125 16.66 11.65875 17.32 11 18 C11.2397871 21.10615338 11.2397871 21.10615338 12 24 C11.67 24.66 11.34 25.32 11 26 C7.05272412 26.17942163 4.4019487 26.09350689 1 24 C0.34 24.66 -0.32 25.32 -1 26 C-4.125 26.125 -4.125 26.125 -7 26 C-7.84454356 22.62182575 -8.10844919 20.32534757 -7 17 C-8.65 15.68 -10.3 14.36 -12 13 C-11.625 10.5625 -11.625 10.5625 -11 8 C-8.29120665 6.64560332 -5.99066732 6.93498549 -3 7 C-2.690625 6.030625 -2.38125 5.06125 -2.0625 4.0625 C-1 1 -1 1 0 0 Z M1 10 C1 10.66 1 11.32 1 12 C-0.65 12 -2.3 12 -4 12 C-3.34 12.66 -2.68 13.32 -2 14 C-1.375 16.125 -1.375 16.125 -1 18 C0.98 18 2.96 18 5 18 C5.12375 17.38125 5.2475 16.7625 5.375 16.125 C6 14 6 14 8 12 C6.35 12 4.7 12 3 12 C3 11.34 3 10.68 3 10 C2.34 10 1.68 10 1 10 Z ",
    fill: "#2B44FF",
    transform: "translate(15,58)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 0 C2.4375 0.125 2.4375 0.125 5 1 C5.268125 1.804375 5.53625 2.60875 5.8125 3.4375 C6.70760399 6.13152972 6.70760399 6.13152972 8.89453125 6.7734375 C10.91225849 7.26108436 12.95610075 7.63737271 15 8 C15.25 10.75 15.25 10.75 15 14 C14.319375 14.66 13.63875 15.32 12.9375 16 C12.298125 16.66 11.65875 17.32 11 18 C11.2397871 21.10615338 11.2397871 21.10615338 12 24 C11.67 24.66 11.34 25.32 11 26 C7.05272412 26.17942163 4.4019487 26.09350689 1 24 C0.34 24.66 -0.32 25.32 -1 26 C-4.125 26.125 -4.125 26.125 -7 26 C-7.84454356 22.62182575 -8.10844919 20.32534757 -7 17 C-8.65 15.68 -10.3 14.36 -12 13 C-11.625 10.5625 -11.625 10.5625 -11 8 C-8.29120665 6.64560332 -5.99066732 6.93498549 -3 7 C-2.690625 6.030625 -2.38125 5.06125 -2.0625 4.0625 C-1 1 -1 1 0 0 Z M1 10 C1 10.66 1 11.32 1 12 C-0.65 12 -2.3 12 -4 12 C-3.34 12.66 -2.68 13.32 -2 14 C-1.375 16.125 -1.375 16.125 -1 18 C0.98 18 2.96 18 5 18 C5.12375 17.38125 5.2475 16.7625 5.375 16.125 C6 14 6 14 8 12 C6.35 12 4.7 12 3 12 C3 11.34 3 10.68 3 10 C2.34 10 1.68 10 1 10 Z ",
    fill: "#2B44FF",
    transform: "translate(93,32)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 0 C2 0.9375 2 0.9375 3.25 4 C3.4975 4.969375 3.745 5.93875 4 6.9375 C5.3921875 6.8446875 5.3921875 6.8446875 6.8125 6.75 C10 6.9375 10 6.9375 11.9375 8.1875 C13 9.9375 13 9.9375 12.9375 11.875 C12 13.9375 12 13.9375 9.875 15.75 C9.25625 16.471875 8.6375 17.19375 8 17.9375 C8.23477199 21.58291845 8.23477199 21.58291845 9 24.9375 C8 25.9375 8 25.9375 5.125 26.125 C2 25.9375 2 25.9375 -1 23.9375 C-1.99 24.5975 -2.98 25.2575 -4 25.9375 C-7.1875 26.0625 -7.1875 26.0625 -10 25.9375 C-10.84454356 22.55932575 -11.10844919 20.26284757 -10 16.9375 C-10.66 16.56625 -11.32 16.195 -12 15.8125 C-14 13.9375 -14 13.9375 -14.25 10.75 C-14.1675 9.821875 -14.085 8.89375 -14 7.9375 C-12.72125 7.710625 -11.4425 7.48375 -10.125 7.25 C-7.92570795 6.77306592 -7.92570795 6.77306592 -6 5.9375 C-4.54708727 3.47494315 -4.54708727 3.47494315 -4 0.9375 C-2 -0.0625 -2 -0.0625 0 0 Z M-2 9.9375 C-2 10.5975 -2 11.2575 -2 11.9375 C-3.65 11.9375 -5.3 11.9375 -7 11.9375 C-6.34 12.5975 -5.68 13.2575 -5 13.9375 C-4.375 16.0625 -4.375 16.0625 -4 17.9375 C-2.02 17.9375 -0.04 17.9375 2 17.9375 C2.12375 17.31875 2.2475 16.7 2.375 16.0625 C3 13.9375 3 13.9375 5 11.9375 C3.35 11.9375 1.7 11.9375 0 11.9375 C0 11.2775 0 10.6175 0 9.9375 C-0.66 9.9375 -1.32 9.9375 -2 9.9375 Z ",
    fill: "#2B44FF",
    transform: "translate(34,32.0625)"
  })),
  team: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "128",
    height: "128",
    viewBox: "0 0 128 128"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 0 C5.01791684 2.41935276 8.49958655 5.9991731 11 11 C11.53625 10.236875 12.0725 9.47375 12.625 8.6875 C15.34686858 5.60749082 17.10601877 4.32248419 21 3 C25.72211533 2.71175598 29.64358643 3.31876115 33.4375 6.25 C36.53310938 9.57211738 38.0482287 11.55787415 37.95703125 16.17578125 C37.602508 20.26283229 37.00300949 23.37980662 35 27 C35.7425 27.20625 36.485 27.4125 37.25 27.625 C40.94271155 29.47135577 42.04061308 31.3801157 44 35 C44.28139654 37.78582574 44.38863832 40.12356255 44.25 42.875 C44.23195313 43.56335938 44.21390625 44.25171875 44.1953125 44.9609375 C44.14863748 46.6412381 44.07690939 48.32081163 44 50 C33.62642369 54.59225513 33.62642369 54.59225513 28 54 C27.505 52.02 27.505 52.02 27 50 C31 48.66666667 35 47.33333333 39 46 C38.88286074 41.11209834 38.73371871 37.92680259 35.625 34 C31.73448051 31.03579467 28.82963409 30.84196313 24.0625 30.8125 C23.02222656 30.79832031 21.98195313 30.78414062 20.91015625 30.76953125 C18.04953387 30.99607718 16.42329849 31.52266381 14 33 C14.34933594 33.54269531 14.69867188 34.08539063 15.05859375 34.64453125 C15.51363281 35.35996094 15.96867187 36.07539062 16.4375 36.8125 C16.88996094 37.52019531 17.34242187 38.22789063 17.80859375 38.95703125 C20.32982695 43.28032622 20.11749969 47.34329656 20.0625 52.1875 C20.05798828 52.93708984 20.05347656 53.68667969 20.04882812 54.45898438 C20.03706354 56.30602383 20.01912865 58.15302213 20 60 C18.2675 60.928125 18.2675 60.928125 16.5 61.875 C15.8503125 62.22304687 15.200625 62.57109375 14.53125 62.9296875 C7.85617236 65.75217403 1.47570409 66.38743732 -5.6875 66.375 C-6.55947021 66.37483887 -7.43144043 66.37467773 -8.32983398 66.37451172 C-16.83484099 66.22545247 -24.79737197 64.80175202 -32 60 C-32.33575177 57.35633288 -32.47386489 55.01801208 -32.4375 52.375 C-32.43282715 51.65094971 -32.4281543 50.92689941 -32.42333984 50.1809082 C-32.22540966 43.03208832 -29.96086196 38.94129294 -26 33 C-31.00618171 29.99389567 -36.34552836 30.53068642 -42 31 C-46.53543968 32.35267499 -47.5714294 33.22857293 -49.875 37.375 C-51.24699935 41.16329401 -51.24699935 41.16329401 -51 46 C-47.37 46.99 -43.74 47.98 -40 49 C-39.67 50.32 -39.34 51.64 -39 53 C-39.33 53.33 -39.66 53.66 -40 54 C-42.07421875 53.984375 -42.07421875 53.984375 -44.6875 53.75 C-45.53699219 53.68296875 -46.38648438 53.6159375 -47.26171875 53.546875 C-50.52718949 52.89471251 -53.08726823 51.58643663 -56 50 C-56.10883596 47.62374823 -56.18766696 45.25256024 -56.25 42.875 C-56.28351562 42.20984375 -56.31703125 41.5446875 -56.3515625 40.859375 C-56.45216034 35.72888513 -55.25606647 32.91671763 -52 29 C-49.25 27.625 -49.25 27.625 -47 27 C-47.7425 25.4840625 -47.7425 25.4840625 -48.5 23.9375 C-50.10209099 20.13540847 -50.52867318 17.15386071 -50 13 C-47.94618797 9.18577766 -45.89453363 5.99989565 -42 4 C-37.33821913 2.74839346 -33.46554621 2.34673835 -29.125 4.6875 C-26.44430289 6.67121586 -24.71271921 8.17905072 -23 11 C-22.443125 10.0925 -21.88625 9.185 -21.3125 8.25 C-15.45456014 0.01721965 -9.6350717 -0.90801723 0 0 Z M-17.375 10.8125 C-18.58034586 15.0312105 -18.57301453 18.63113196 -16.875 22.6875 C-13.81945055 26.45601098 -10.83371519 28.6943808 -6 29.5 C-1.16628481 28.6943808 1.81945055 26.45601098 4.875 22.6875 C6.35117243 19.16108808 6.46618895 16.79611 6 13 C3.97333762 9.29609979 2.51955484 7.34636989 -1 5 C-7.72741467 3.89798541 -13.082044 5.15360345 -17.375 10.8125 Z M-43 11 C-44.92863839 13.54229606 -45.00902291 14.78345018 -44.875 18 C-43.84308189 21.53800495 -43.04332421 22.91772554 -40 25 C-36.54271642 25.75011367 -36.54271642 25.75011367 -33 25 C-29.61322911 22.54999553 -28.21301416 21.13607554 -27.4375 17 C-28.14435962 13.23008205 -29.18168215 11.59581908 -32 9 C-36.68259909 7.40592371 -39.1639797 7.90987254 -43 11 Z M19.1875 9.8125 C16.64812646 12.35187354 16.09674999 13.2743751 15.625 16.8125 C15.75709764 20.15103868 15.75709764 20.15103868 18.0625 22.875 C20.88873671 25.23196922 20.88873671 25.23196922 24.5 25.6875 C28.20453392 25.26341126 28.20453392 25.26341126 31 22.375 C33.25250083 19.20555928 33.25250083 19.20555928 33.0625 15.875 C31.83752006 12.56034839 30.85371874 11.08244341 28 9 C24.05165159 7.65588139 22.73787092 7.52448319 19.1875 9.8125 Z M-24 21 C-24.66 22.98 -25.32 24.96 -26 27 C-23.67676547 28.62750037 -23.67676547 28.62750037 -21 30 C-20.01 29.67 -19.02 29.34 -18 29 C-18.80814651 27.66402348 -19.62163181 26.331275 -20.4375 25 C-21.11619141 23.88625 -21.11619141 23.88625 -21.80859375 22.75 C-22.39833984 21.88375 -22.39833984 21.88375 -23 21 C-23.33 21 -23.66 21 -24 21 Z M11 21 C8.525 25.455 8.525 25.455 6 30 C9.10380501 29.22404875 11.25002779 28.4731994 14 27 C13.34 25.02 12.68 23.04 12 21 C11.67 21 11.34 21 11 21 Z M-22.64453125 38.53515625 C-26.22556048 43.21804063 -27.12499485 45.25048416 -27.0625 51.125 C-27.05347656 52.22070312 -27.04445313 53.31640625 -27.03515625 54.4453125 C-27.02355469 55.28835937 -27.01195313 56.13140625 -27 57 C-12.08872539 62.50846055 0.11952397 63.29558601 15 57 C15.55189339 49.01631301 15.55189339 49.01631301 13.3125 41.5 C9.75431499 37.65331351 6.55854032 34.30215317 1.10229492 33.83886719 C-1.20278787 33.79324824 -3.50700389 33.76474338 -5.8125 33.75 C-7.00456055 33.7190625 -7.00456055 33.7190625 -8.22070312 33.6875 C-13.96853238 33.64946639 -18.27277975 34.45416257 -22.64453125 38.53515625 Z ",
    fill: "#2A43FF",
    transform: "translate(70,31)"
  })),
  testimonial: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "128",
    height: "128",
    viewBox: "0 0 128 128"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 0 C0.78434418 -0.0071553 1.56868835 -0.01431061 2.37680054 -0.02168274 C4.9607019 -0.03854549 7.54286241 -0.01918468 10.12670898 0.00219727 C11.92602176 0.00136842 13.72533447 -0.00109155 15.52464294 -0.00511169 C19.29156341 -0.00796791 23.05788869 0.00671548 26.82470703 0.03417969 C31.65266592 0.06828695 36.47956239 0.0622346 41.30757236 0.04351711 C45.02138626 0.03294895 48.73495292 0.04188281 52.44874382 0.05690193 C54.22893477 0.06208392 56.00915153 0.06160173 57.78933907 0.05535698 C60.27679108 0.04990588 62.7627214 0.07027375 65.25 0.09765625 C65.98517349 0.09113037 66.72034698 0.08460449 67.47779846 0.07788086 C70.78540704 0.13979072 72.76389163 0.42740802 75.51609802 2.31874084 C77.40926509 5.15365569 77.56678817 6.76771005 77.57788086 10.16235352 C77.5904895 11.27030273 77.60309814 12.37825195 77.61608887 13.51977539 C77.60799194 14.71151367 77.59989502 15.90325195 77.59155273 17.13110352 C77.59537964 18.35893555 77.59920654 19.58676758 77.60314941 20.85180664 C77.60587115 23.44751811 77.59849185 26.04325688 77.58178711 28.63891602 C77.56038348 32.61609951 77.58158236 36.59147633 77.60717773 40.56860352 C77.60453451 43.08944084 77.59940964 45.61027705 77.59155273 48.13110352 C77.59964966 49.3228418 77.60774658 50.51458008 77.61608887 51.74243164 C77.5971759 53.40435547 77.5971759 53.40435547 77.57788086 55.09985352 C77.57469849 56.07374023 77.57151611 57.04762695 77.5682373 58.05102539 C76.91265865 61.38106877 75.71706077 62.57694684 73.06030273 64.63110352 C69.76733398 65.05004883 69.76733398 65.05004883 65.87280273 64.95922852 C64.43660825 64.95421642 63.00040941 64.95034858 61.56420898 64.94750977 C59.32365471 64.9207147 57.08484426 64.88177967 54.8449707 64.82006836 C43.53977802 64.55095699 37.09599384 66.2387386 28.06030273 73.63110352 C26.71778154 74.5859204 25.36628461 75.52839283 24.00170898 76.45141602 C23.43129883 76.84071289 22.86088867 77.23000977 22.27319336 77.63110352 C21.72856445 78.00235352 21.18393555 78.37360352 20.62280273 78.75610352 C20.05110352 79.16602539 19.4794043 79.57594727 18.89038086 79.99829102 C17.18920898 81.13891602 17.18920898 81.13891602 14.06030273 82.63110352 C11.50452403 82.00705878 9.92389615 81.49469693 8.06030273 79.63110352 C7.98716707 77.1006095 7.96782746 74.59805515 7.99780273 72.06860352 C8.00231445 71.35768555 8.00682617 70.64676758 8.01147461 69.91430664 C8.02329409 68.15320338 8.0412301 66.39214316 8.06030273 64.63110352 C6.41030273 64.63110352 4.76030273 64.63110352 3.06030273 64.63110352 C3.11250977 65.79125977 3.11250977 65.79125977 3.16577148 66.97485352 C3.33950763 73.65955868 2.97224072 78.58323232 0.06030273 84.63110352 C-0.59969727 85.29110352 -1.25969727 85.95110352 -1.93969727 86.63110352 C-2.43469727 87.78610352 -2.92969727 88.94110352 -3.43969727 90.13110352 C-4.93969727 93.63110352 -4.93969727 93.63110352 -6.93969727 95.63110352 C-7.58737519 98.20171663 -7.58737519 98.20171663 -7.93969727 100.63110352 C-7.07086914 100.58469727 -6.20204102 100.53829102 -5.30688477 100.49047852 C5.28408792 100.1587702 5.28408792 100.1587702 8.74780273 102.38110352 C12.10797695 105.65046221 13.15135618 107.98701682 13.36108398 112.63500977 C13.37563066 114.15447641 13.37921422 115.67408077 13.37280273 117.19360352 C13.38891602 117.96124023 13.4050293 118.72887695 13.42163086 119.51977539 C13.42649091 125.09424945 13.42649091 125.09424945 11.88867188 127.3487854 C9.34227848 129.13468646 7.53993337 129.01200243 4.44311523 129.01928711 C3.29182129 129.02874359 2.14052734 129.03820007 0.9543457 129.04794312 C-0.91133057 129.03883408 -0.91133057 129.03883408 -2.81469727 129.02954102 C-4.09070801 129.03241119 -5.36671875 129.03528137 -6.68139648 129.03823853 C-9.38173843 129.04028186 -12.08126808 129.03623743 -14.78149414 129.0222168 C-18.24188956 129.00512441 -21.70158697 129.01496659 -25.16195679 129.03293419 C-28.46289532 129.04638368 -31.76374963 129.03696596 -35.06469727 129.02954102 C-36.30848145 129.03561371 -37.55226563 129.0416864 -38.83374023 129.04794312 C-39.98503418 129.03848663 -41.13632812 129.02903015 -42.32250977 129.01928711 C-43.33716309 129.01690033 -44.35181641 129.01451355 -45.3972168 129.01205444 C-47.93969727 128.63110352 -47.93969727 128.63110352 -49.76586914 127.34658813 C-51.83077732 124.3288395 -51.36829893 120.78190201 -51.31469727 117.25610352 C-51.33209961 116.12301758 -51.33209961 116.12301758 -51.34985352 114.96704102 C-51.32587862 110.39582679 -50.9734329 107.27423582 -47.93969727 103.63110352 C-44.02933169 100.5176691 -41.04668671 100.29452808 -36.12719727 100.44360352 C-34.3850293 100.48420898 -34.3850293 100.48420898 -32.60766602 100.52563477 C-31.72723633 100.56043945 -30.84680664 100.59524414 -29.93969727 100.63110352 C-31.18781133 96.67694904 -32.41191666 93.89615346 -34.93969727 90.63110352 C-35.61318888 88.96718306 -36.28061317 87.30078324 -36.93969727 85.63110352 C-37.59969727 84.97110352 -38.25969727 84.31110352 -38.93969727 83.63110352 C-41.84752615 75.40081751 -42.52942375 64.47030779 -39.87719727 56.00610352 C-36.78392038 50.61781474 -33.07466417 46.97743272 -27.00219727 45.25610352 C-22.52494007 44.39207143 -17.10175993 43.55007218 -12.93969727 45.63110352 C-12.96588135 44.44556885 -12.99206543 43.26003418 -13.01904297 42.03857422 C-13.10968748 37.63121485 -13.16699815 33.22393751 -13.21435547 28.81591797 C-13.23946725 26.90985245 -13.27356371 25.00388292 -13.31689453 23.09814453 C-13.37769471 20.35498354 -13.40593972 17.61309766 -13.42797852 14.86938477 C-13.45378494 14.02024002 -13.47959137 13.17109528 -13.50617981 12.29621887 C-13.50655746 11.49576645 -13.50693512 10.69531403 -13.50732422 9.87060547 C-13.52397881 8.8213665 -13.52397881 8.8213665 -13.54096985 7.75093079 C-11.60330131 0.91954893 -6.26856541 -0.09997053 0 0 Z M-7.93969727 7.63110352 C-8.20116966 10.50144743 -8.34049061 13.27117313 -8.38110352 16.14672852 C-8.39487534 16.99531433 -8.40864716 17.84390015 -8.4228363 18.71820068 C-8.44613502 20.517064 -8.46338683 22.31601415 -8.47509766 24.11499023 C-8.5019676 26.85766092 -8.57682729 29.59644019 -8.65258789 32.33813477 C-8.66925059 34.08680674 -8.68301517 35.83550921 -8.69360352 37.58422852 C-8.7234584 38.40006409 -8.75331329 39.21589966 -8.78407288 40.05645752 C-8.75768721 43.50188255 -8.72755497 45.73212988 -6.39840698 48.38977051 C-4.55573729 49.96524285 -4.55573729 49.96524285 -2.63365173 51.25823975 C0.17818856 53.53709301 0.91500203 56.26257204 2.06030273 59.63110352 C3.01743164 59.72198242 3.01743164 59.72198242 3.99389648 59.81469727 C4.82018555 59.89848633 5.64647461 59.98227539 6.49780273 60.06860352 C7.32151367 60.14981445 8.14522461 60.23102539 8.99389648 60.31469727 C11.06030273 60.63110352 11.06030273 60.63110352 12.06030273 61.63110352 C12.29683796 64.15706611 12.48203965 66.66217559 12.62280273 69.19360352 C12.66598633 69.90452148 12.70916992 70.61543945 12.75366211 71.34790039 C12.8600205 73.10872263 12.96069119 74.86988671 13.06030273 76.63110352 C14.62520631 75.65578285 16.18701494 74.67549712 17.74780273 73.69360352 C18.72579834 73.08460205 19.70379395 72.47560059 20.71142578 71.84814453 C22.92682925 70.42747687 24.86228984 68.97610396 26.91625977 67.29858398 C35.89852689 60.13910603 42.99833758 59.39512051 54.24780273 59.69360352 C56.49389355 59.714559 58.73948761 59.72290347 60.985672 59.72276306 C62.99405481 59.72845048 65.00226696 59.76685122 67.01025391 59.80712891 C70.17087434 59.96399268 70.17087434 59.96399268 72.06030273 57.63110352 C72.3662259 55.42239873 72.3662259 55.42239873 72.3190918 52.84594727 C72.32854828 51.35430054 72.32854828 51.35430054 72.3381958 49.83251953 C72.33414734 48.75542725 72.33009888 47.67833496 72.32592773 46.56860352 C72.32784119 45.46637451 72.32975464 44.36414551 72.33172607 43.22851562 C72.33308886 40.89493583 72.32938596 38.56134849 72.32104492 36.2277832 C72.31034694 32.64590505 72.32093732 29.06452848 72.33374023 25.48266602 C72.33241866 23.21964407 72.3298563 20.95662244 72.32592773 18.69360352 C72.3299762 17.61651123 72.33402466 16.53941895 72.3381958 15.4296875 C72.33189148 14.43525635 72.32558716 13.4408252 72.3190918 12.41625977 C72.31750061 11.53848877 72.31590942 10.66071777 72.31427002 9.75634766 C72.25661215 7.4152737 72.25661215 7.4152737 70.06030273 5.63110352 C67.63200213 5.43295167 65.31776255 5.35827084 62.88842773 5.37231445 C62.1500769 5.36880981 61.41172607 5.36530518 60.65100098 5.36169434 C58.20400666 5.35287302 55.75730013 5.35872747 53.31030273 5.36547852 C51.61401311 5.36413198 49.91772385 5.36219154 48.22143555 5.35968018 C44.66378104 5.35672837 41.10622685 5.36102833 37.54858398 5.37036133 C32.98179133 5.38175593 28.41523373 5.37519675 23.84844971 5.3632164 C20.34495259 5.35599929 16.84151147 5.35828503 13.3380127 5.36347198 C11.653849 5.3648089 9.96968027 5.36315932 8.28552246 5.35851288 C5.93427 5.35345005 3.5834015 5.36115419 1.23217773 5.37231445 C0.53185425 5.36826599 -0.16846924 5.36421753 -0.89001465 5.36004639 C-4.85871351 5.29349416 -4.85871351 5.29349416 -7.93969727 7.63110352 Z M-31.93969727 54.63110352 C-33.91265905 57.10863849 -33.91265905 57.10863849 -34.93969727 59.63110352 C-34.60969727 60.29110352 -34.27969727 60.95110352 -33.93969727 61.63110352 C-33.10438477 60.61016602 -33.10438477 60.61016602 -32.25219727 59.56860352 C-29.93969727 57.63110352 -29.93969727 57.63110352 -27.25219727 57.81860352 C-24.93969727 58.63110352 -24.93969727 58.63110352 -23.93969727 59.63110352 C-22.31830289 59.75604968 -20.69085605 59.80681976 -19.06469727 59.81860352 C-17.73825195 59.83987305 -17.73825195 59.83987305 -16.38500977 59.86157227 C-13.68203 59.80178776 -13.68203 59.80178776 -10.93969727 57.63110352 C-7.95866368 57.85468103 -6.40534179 58.22968582 -4.12719727 60.19360352 C-3.73532227 60.66797852 -3.34344727 61.14235352 -2.93969727 61.63110352 C-4.18077129 56.66680741 -5.70076138 54.49238524 -9.93969727 51.63110352 C-16.57534479 48.31327976 -26.7211284 49.41253465 -31.93969727 54.63110352 Z M-28.93969727 62.63110352 C-29.44585024 63.89949877 -29.94438826 65.17093453 -30.43969727 66.44360352 C-30.71813477 67.15129883 -30.99657227 67.85899414 -31.28344727 68.58813477 C-32.09261346 70.74951567 -32.09261346 70.74951567 -31.93969727 73.63110352 C-32.92969727 73.63110352 -33.91969727 73.63110352 -34.93969727 73.63110352 C-34.67576226 77.06340799 -34.67576226 77.06340799 -33.93969727 80.63110352 C-32.45469727 81.62110352 -32.45469727 81.62110352 -30.93969727 82.63110352 C-30.71282227 83.70360352 -30.48594727 84.77610352 -30.25219727 85.88110352 C-28.47794443 90.95039732 -25.64384515 93.18311976 -20.93969727 95.63110352 C-16.51686524 96.07338672 -12.98581559 92.94900371 -9.59985352 90.32250977 C-7.28452845 87.96360211 -7.15953512 85.85539198 -6.93969727 82.63110352 C-5.94969727 81.97110352 -4.95969727 81.31110352 -3.93969727 80.63110352 C-3.20363228 77.06340799 -3.20363228 77.06340799 -2.93969727 73.63110352 C-3.92969727 73.63110352 -4.91969727 73.63110352 -5.93969727 73.63110352 C-6.06086914 73.00461914 -6.18204102 72.37813477 -6.30688477 71.73266602 C-6.47446289 70.91540039 -6.64204102 70.09813477 -6.81469727 69.25610352 C-6.97711914 68.44399414 -7.13954102 67.63188477 -7.30688477 66.79516602 C-7.80628658 64.44436429 -7.80628658 64.44436429 -9.93969727 62.63110352 C-10.92969727 63.12610352 -10.92969727 63.12610352 -11.93969727 63.63110352 C-14.2505226 63.72846171 -16.56432685 63.76087724 -18.87719727 63.75610352 C-20.1237207 63.75868164 -21.37024414 63.76125977 -22.65454102 63.76391602 C-25.93969727 63.63110352 -25.93969727 63.63110352 -28.93969727 62.63110352 Z M-24.93969727 99.63110352 C-24.61009511 104.64645404 -24.61009511 104.64645404 -21.93969727 108.63110352 C-18.9820055 109.13120875 -18.9820055 109.13120875 -15.93969727 108.63110352 C-13.47235827 106.41049842 -12.97817281 105.19541149 -12.75219727 101.88110352 C-12.81407227 101.13860352 -12.87594727 100.39610352 -12.93969727 99.63110352 C-14.17719727 99.81672852 -15.41469727 100.00235352 -16.68969727 100.19360352 C-19.70249303 100.57821574 -22.03980554 100.71856291 -24.93969727 99.63110352 Z M-44.12719727 107.31860352 C-46.979722 111.90251306 -46.979722 111.90251306 -45.93969727 123.63110352 C-28.11969727 123.63110352 -10.29969727 123.63110352 8.06030273 123.63110352 C9.36030273 111.53110352 9.36030273 111.53110352 5.06030273 106.63110352 C0.73314673 105.18871818 -3.42984427 104.81588962 -7.93969727 105.63110352 C-10.11916372 108.48361736 -10.11916372 108.48361736 -11.93969727 111.63110352 C-16.10630843 113.87608469 -19.24266837 113.82535747 -23.75219727 112.56860352 C-26.93969727 110.63110352 -26.93969727 110.63110352 -28.18969727 107.94360352 C-29.7169537 105.39559803 -29.7169537 105.39559803 -32.38500977 105.13500977 C-36.93210515 104.93493757 -40.07168162 105.17156582 -44.12719727 107.31860352 Z ",
    fill: "#2A44FF",
    transform: "translate(50.939697265625,-0.631103515625)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 0 C2.375 0.1875 2.375 0.1875 5 1 C6.3125 3.5625 6.3125 3.5625 7 6 C7.804375 5.979375 8.60875 5.95875 9.4375 5.9375 C12 6 12 6 13 7 C13.1875 9.4375 13.1875 9.4375 13 12 C12.34 12.66 11.68 13.32 11 14 C10.54188325 15.97235333 10.54188325 15.97235333 10.375 18.125 C10.25125 19.40375 10.1275 20.6825 10 22 C7.52076199 22.02685095 5.0418116 22.04676547 2.5625 22.0625 C1.85544922 22.07087891 1.14839844 22.07925781 0.41992188 22.08789062 C-1.38693559 22.09653588 -3.19387603 22.05220011 -5 22 C-6 21 -6 21 -6.4375 17.5625 C-6.64847551 13.95941003 -6.64847551 13.95941003 -9 12 C-9.125 9.375 -9.125 9.375 -9 7 C-7.6078125 6.6596875 -7.6078125 6.6596875 -6.1875 6.3125 C-2.49280817 4.7911563 -1.67517239 3.53647504 0 0 Z M2 9 C1.01 9.99 0.02 10.98 -1 12 C-0.67 12.99 -0.34 13.98 0 15 C1.32 15 2.64 15 4 15 C4.33 13.68 4.66 12.36 5 11 C4.01 10.34 3.02 9.68 2 9 Z ",
    fill: "#2A43FF",
    transform: "translate(81,10)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 0 C2.4375 0.1875 2.4375 0.1875 5 1 C5.6837045 2.32467746 6.34964186 3.65863633 7 5 C7.845625 5.33 8.69125 5.66 9.5625 6 C12 7 12 7 12.9375 8.9375 C13 11 13 11 11 14 C10.63858045 16.32914823 10.30300475 18.66253478 10 21 C9 22 9 22 5.62109375 22.09765625 C4.22652923 22.09098369 2.83198257 22.07902532 1.4375 22.0625 C0.72658203 22.05798828 0.01566406 22.05347656 -0.71679688 22.04882812 C-2.47790013 22.03700864 -4.23896036 22.01907263 -6 22 C-6.1953125 19.98177083 -6.390625 17.96354167 -6.5859375 15.9453125 C-6.86374749 13.77331755 -6.86374749 13.77331755 -9 12 C-9.1875 9.4375 -9.1875 9.4375 -9 7 C-8 6 -8 6 -5.4375 5.9375 C-4.2309375 5.9684375 -4.2309375 5.9684375 -3 6 C-2.690625 5.195625 -2.38125 4.39125 -2.0625 3.5625 C-1 1 -1 1 0 0 Z M1 9 C-0.10836423 10.88316159 -0.10836423 10.88316159 -1 13 C-0.67 13.66 -0.34 14.32 0 15 C1.32 15 2.64 15 4 15 C4.33 13.68 4.66 12.36 5 11 C3.68 10.34 2.36 9.68 1 9 Z ",
    fill: "#2A43FF",
    transform: "translate(107,10)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 0 C1.9375 0.125 1.9375 0.125 4 1 C5.25 3.5625 5.25 3.5625 6 6 C6.78375 5.95875 7.5675 5.9175 8.375 5.875 C11 6 11 6 13 8 C12.63318342 10.93453261 12.13562754 11.86437246 10 14 C9.95907063 16.33297433 9.95758277 18.66705225 10 21 C9 22 9 22 5.62109375 22.09765625 C4.22652923 22.09098369 2.83198257 22.07902532 1.4375 22.0625 C0.72658203 22.05798828 0.01566406 22.05347656 -0.71679688 22.04882812 C-2.47790013 22.03700864 -4.23896036 22.01907263 -6 22 C-6.55529747 19.83388095 -7.05171904 17.70446262 -7.4375 15.5 C-7.98695536 13.05797619 -8.78960308 11.17871446 -10 9 C-9.34 8.01 -8.68 7.02 -8 6 C-5.375 5.8125 -5.375 5.8125 -3 6 C-2.690625 5.195625 -2.38125 4.39125 -2.0625 3.5625 C-1 1 -1 1 0 0 Z M1 8 C1 8.66 1 9.32 1 10 C0.34 10 -0.32 10 -1 10 C-1 11.65 -1 13.3 -1 15 C0.65 15 2.3 15 4 15 C4.33 13.68 4.66 12.36 5 11 C4.01 10.67 3.02 10.34 2 10 C1.67 9.34 1.34 8.68 1 8 Z ",
    fill: "#2A44FF",
    transform: "translate(56,10)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 0 C0.97484848 0.00222061 1.94969696 0.00444122 2.9540863 0.00672913 C4.05515213 0.00680466 5.15621796 0.00688019 6.29064941 0.00695801 C8.08749428 0.01469994 8.08749428 0.01469994 9.92063904 0.02259827 C11.14000656 0.02401321 12.35937408 0.02542816 13.61569214 0.02688599 C17.52856349 0.03250485 21.4413786 0.04506055 25.35423279 0.05775452 C27.99941426 0.06276709 30.64459662 0.06733041 33.28977966 0.07142639 C39.79045005 0.08248041 46.2910874 0.09923688 52.79173279 0.12025452 C52.79173279 1.77025452 52.79173279 3.42025452 52.79173279 5.12025452 C34.64173279 5.12025452 16.49173279 5.12025452 -2.20826721 5.12025452 C-2.53826721 3.80025452 -2.86826721 2.48025452 -3.20826721 1.12025452 C-2.20826721 0.12025452 -2.20826721 0.12025452 0 0 Z ",
    fill: "#2B43FF",
    transform: "translate(58.20826721191406,37.87974548339844)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0 0 C1.21171875 0.00322266 2.4234375 0.00644531 3.671875 0.00976562 C4.94289063 0.01814453 6.21390625 0.02652344 7.5234375 0.03515625 C8.8021875 0.03966797 10.0809375 0.04417969 11.3984375 0.04882812 C14.56515042 0.06064422 17.73177106 0.0771181 20.8984375 0.09765625 C21.5584375 1.41765625 22.2184375 2.73765625 22.8984375 4.09765625 C20.8984375 6.09765625 20.8984375 6.09765625 18.10107422 6.32470703 C16.93850098 6.3142334 15.77592773 6.30375977 14.578125 6.29296875 C12.69287109 6.28330078 12.69287109 6.28330078 10.76953125 6.2734375 C9.45082031 6.25667969 8.13210937 6.23992188 6.7734375 6.22265625 C5.43360029 6.21262608 4.09375598 6.20350029 2.75390625 6.1953125 C-0.53142823 6.171677 -3.81640715 6.13872859 -7.1015625 6.09765625 C-7.4315625 4.44765625 -7.7615625 2.79765625 -8.1015625 1.09765625 C-5.33538687 -0.28543156 -3.0913825 -0.01444571 0 0 Z ",
    fill: "#2B45FF",
    transform: "translate(76.1015625,45.90234375)"
  })),
  callToActions: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "128",
    height: "128",
    viewBox: "0 0 128 128"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    transform: "translate(0.000000,128.000000) scale(0.100000,-0.100000)",
    fill: "#2b44ff",
    stroke: "none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M65 1051 c-11 -5 -29 -19 -40 -31 -18 -20 -20 -36 -20 -201 l0 -179\r 28 -27 27 -28 423 0 c368 0 422 2 422 15 0 13 -54 15 -414 18 -368 2 -417 4\r -433 19 -16 14 -18 34 -18 184 0 139 3 170 16 183 14 14 79 16 564 16 485 0\r 550 -2 564 -16 13 -13 16 -44 16 -180 0 -111 -4 -171 -12 -184 -14 -22 -6 -35\r 17 -26 29 11 36 58 33 223 -3 163 -3 163 -31 190 l-27 28 -548 2 c-301 1 -556\r -2 -567 -6z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M235 891 c-3 -6 -16 -39 -30 -75 -17 -46 -21 -67 -13 -72 6 -4 16 0\r 23 9 15 21 61 22 69 2 5 -15 36 -21 36 -7 0 4 -12 40 -26 80 -24 66 -44 87\r -59 63z m25 -76 c0 -8 -4 -15 -10 -15 -5 0 -10 7 -10 15 0 8 5 15 10 15 6 0\r 10 -7 10 -15z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M365 875 c-16 -15 -25 -36 -25 -55 0 -63 83 -105 125 -64 23 23 5 38\r -28 23 -23 -10 -30 -9 -47 6 -41 37 -7 93 49 80 24 -5 31 -3 31 8 0 35 -72 36\r -105 2z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M510 885 c0 -8 7 -15 15 -15 10 0 15 -16 17 -62 2 -38 8 -63 16 -66\r 9 -3 12 13 12 58 0 53 3 63 20 67 11 3 20 12 20 19 0 10 -14 14 -50 14 -38 0\r -50 -4 -50 -15z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M644 887 c-3 -8 -4 -43 -2 -78 2 -49 7 -64 18 -64 12 0 15 15 15 74\r 0 51 -4 76 -12 78 -7 3 -15 -2 -19 -10z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M743 885 c-29 -21 -38 -66 -19 -103 38 -73 146 -46 146 37 0 67 -72\r 105 -127 66z m81 -31 c9 -8 16 -24 16 -34 0 -20 -25 -50 -41 -50 -27 0 -49 22\r -49 50 0 44 44 65 74 34z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M910 820 c0 -63 3 -80 14 -80 10 0 16 14 18 43 l3 42 29 -42 c44 -66\r 56 -58 56 37 0 63 -3 80 -14 80 -10 0 -16 -14 -18 -42 l-3 -43 -29 43 c-44 65\r -56 57 -56 -38z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M958 689 c-6 -17 26 -367 35 -375 4 -4 25 7 48 25 22 18 42 31 43 30\r 2 -2 20 -37 40 -76 20 -40 40 -73 44 -72 14 1 96 55 99 65 2 6 -15 38 -37 72\r -22 35 -40 66 -40 70 0 4 19 15 43 23 23 9 42 21 42 28 0 10 -291 221 -307\r 221 -3 0 -8 -5 -10 -11z m154 -126 l110 -77 -41 -18 c-23 -9 -41 -21 -41 -25\r 0 -4 20 -39 44 -78 40 -63 43 -70 28 -82 -30 -22 -41 -14 -73 50 -46 91 -46\r 92 -85 62 -18 -14 -35 -25 -37 -25 -2 0 -7 44 -11 98 -4 53 -10 114 -13 135\r -3 20 -2 37 2 37 3 0 56 -35 117 -77z"
  }))),
  countUp: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    version: "1.0",
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 128.000000 128.000000",
    preserveAspectRatio: "xMidYMid meet",
    context: "list-view",
    "aria-hidden": "true",
    focusable: "false"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    transform: "translate(0.000000,128.000000) scale(0.100000,-0.100000)",
    fill: "#2b44ff",
    stroke: "none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M51 966 c-48 -26 -50 -43 -51 -324 0 -286 3 -307 55 -330 37 -17\r 1133 -17 1170 0 51 23 55 45 55 328 0 283 -4 305 -55 328 -40 18 -1141 16\r -1174 -2z m1171 -43 c17 -15 18 -37 18 -280 0 -250 -1 -264 -20 -283 -20 -20\r -33 -20 -580 -20 -547 0 -560 0 -580 20 -19 19 -20 33 -20 284 0 262 0 265 22\r 280 20 14 92 16 582 16 507 0 561 -2 578 -17z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M85 887 c-3 -7 -4 -123 -3 -257 l3 -245 45 0 c33 0 45 4 45 15 0 9\r -11 16 -27 18 l-28 3 0 220 0 219 160 0 160 0 0 -220 0 -219 -107 -3 c-88 -2\r -108 -6 -108 -18 0 -13 61 -15 485 -15 l485 0 0 255 0 255 -125 0 c-104 0\r -125 -2 -125 -15 0 -9 11 -16 27 -18 l28 -3 -35 -47 c-52 -68 -46 -77 50 -77\r 64 0 80 3 80 15 0 11 -14 16 -57 18 l-58 3 33 44 c31 43 33 44 90 45 l57 0 0\r -220 0 -220 -32 0 c-26 0 -37 6 -50 29 -14 26 -14 32 -2 42 8 6 14 28 14 49 0\r 30 -6 44 -31 64 -17 14 -39 26 -50 26 -42 0 -88 -38 -89 -72 0 -26 25 -22 44\r 8 34 51 110 9 83 -46 -7 -14 -23 -26 -35 -28 -29 -4 -28 -30 2 -42 57 -21 37\r -30 -68 -30 l-106 0 0 219 0 220 28 3 c16 2 27 9 27 18 0 13 -53 15 -403 18\r -320 2 -404 0 -407 -11z m715 -247 l0 -220 -160 0 -160 0 0 220 0 220 160 0\r 160 0 0 -220z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M590 775 c0 -8 11 -17 25 -21 24 -6 24 -7 27 -132 3 -111 5 -127 21\r -130 16 -3 17 9 17 147 l0 151 -45 0 c-33 0 -45 -4 -45 -15z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M245 791 c-50 -21 -60 -47 -60 -153 l0 -100 34 -30 c28 -25 39 -29\r 70 -24 21 3 45 16 59 31 20 23 22 37 22 125 0 88 -2 102 -22 124 -25 28 -72\r 40 -103 27z m75 -51 c17 -17 20 -33 20 -100 0 -67 -3 -83 -20 -100 -24 -24\r -57 -26 -82 -3 -25 23 -27 177 -1 205 21 24 58 23 83 -2z"
  }))),
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    version: "1.0",
    xmlns: "http://www.w3.org/2000/svg",
    width: "128.000000pt",
    height: "128.000000pt",
    viewBox: "0 0 128.000000 128.000000",
    preserveAspectRatio: "xMidYMid meet"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    transform: "translate(0.000000,128.000000) scale(0.100000,-0.100000)",
    fill: "#2b44ff",
    stroke: "none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M235 1271 c-11 -5 -31 -21 -45 -36 l-25 -27 -3 -573 -2 -573 24 -29\r c20 -23 32 -28 70 -28 46 0 46 0 203 157 119 119 164 158 183 158 19 0 64 -39\r 183 -158 156 -156 158 -157 202 -157 33 0 50 6 67 23 l23 23 0 579 0 580 -33\r 32 -32 33 -398 2 c-218 1 -406 -2 -417 -6z m803 -634 c2 -432 -1 -557 -10\r -557 -7 0 -80 67 -163 149 -224 222 -226 222 -450 0 -83 -82 -156 -149 -163\r -149 -9 0 -12 127 -12 553 0 305 3 557 7 560 4 4 182 6 397 5 l391 -3 3 -558z"
  }))),
  faq: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    version: "1.0",
    xmlns: "http://www.w3.org/2000/svg",
    width: "128.000000pt",
    height: "128.000000pt",
    viewBox: "0 0 128.000000 128.000000",
    preserveAspectRatio: "xMidYMid meet"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    transform: "translate(0.000000,128.000000) scale(0.100000,-0.100000)",
    fill: "#2b44ff",
    stroke: "none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M63 1090 c-13 -5 -32 -24 -43 -42 -19 -31 -20 -50 -20 -358 0 -307 1\r -327 20 -358 11 -18 32 -37 46 -42 14 -6 128 -10 253 -10 l227 0 37 -50 c23\r -30 45 -50 57 -50 12 0 34 20 57 50 l37 50 227 0 c125 0 239 4 253 10 14 5 35\r 24 46 42 19 31 20 51 20 353 0 285 -2 324 -18 355 -9 19 -28 40 -42 47 -30 15\r -1120 18 -1157 3z m1137 -79 c14 -27 14 -615 0 -642 -10 -18 -24 -19 -255 -19\r l-244 0 -30 -37 -31 -38 -31 38 -30 37 -244 0 c-231 0 -245 1 -255 19 -14 27\r -14 615 0 642 10 18 27 19 560 19 533 0 550 -1 560 -19z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M208 859 c-16 -9 -18 -28 -18 -168 0 -132 3 -161 16 -172 29 -24 48\r 1 54 72 l5 64 45 3 c40 3 59 14 60 34 0 19 -35 38 -71 38 -36 0 -39 2 -39 29\r 0 27 3 29 51 33 64 7 85 31 53 62 -18 18 -128 22 -156 5z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M523 862 c-15 -10 -123 -288 -123 -318 0 -45 51 -40 70 7 12 28 15\r 29 74 29 61 0 63 -1 77 -32 15 -36 45 -44 62 -17 8 13 -3 52 -43 160 -64 172\r -79 195 -117 171z m45 -179 c11 -33 11 -33 -24 -33 -18 0 -34 2 -34 4 0 2 7\r 20 16 41 17 41 25 38 42 -12z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M853 859 c-44 -13 -101 -74 -114 -122 -37 -137 96 -260 231 -213 40\r 14 46 14 61 0 14 -12 22 -13 38 -4 24 12 26 29 8 54 -12 16 -11 25 0 60 47\r 136 -85 268 -224 225z m102 -75 c40 -19 70 -74 60 -111 -5 -20 -9 -23 -18 -14\r -16 16 -57 13 -64 -5 -3 -9 -1 -26 6 -37 10 -16 10 -21 -1 -28 -46 -29 -138\r 38 -138 101 0 29 34 79 63 94 40 20 51 20 92 0z"
  })))
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (svg);


/***/ }),

/***/ "./node_modules/lodash/_DataView.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_DataView.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "./node_modules/lodash/_Promise.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_Promise.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "./node_modules/lodash/_SetCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_SetCache.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js"),
    setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ "./node_modules/lodash/_setCacheAdd.js"),
    setCacheHas = __webpack_require__(/*! ./_setCacheHas */ "./node_modules/lodash/_setCacheHas.js");

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "./node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "./node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "./node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "./node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "./node_modules/lodash/_stackSet.js");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "./node_modules/lodash/_WeakMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "./node_modules/lodash/_apply.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_apply.js ***!
  \***************************************/
/***/ ((module) => {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ "./node_modules/lodash/_arrayFilter.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayFilter.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ "./node_modules/lodash/_arrayIncludes.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayIncludes.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIndexOf = __webpack_require__(/*! ./_baseIndexOf */ "./node_modules/lodash/_baseIndexOf.js");

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),

/***/ "./node_modules/lodash/_arrayIncludesWith.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash/_arrayIncludesWith.js ***!
  \***************************************************/
/***/ ((module) => {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "./node_modules/lodash/_arraySome.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arraySome.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),

/***/ "./node_modules/lodash/_assignMergeValue.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_assignMergeValue.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;


/***/ }),

/***/ "./node_modules/lodash/_assignValue.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_assignValue.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseAssignValue.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "./node_modules/lodash/_baseCreate.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseCreate.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ "./node_modules/lodash/_baseFindIndex.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_baseFindIndex.js ***!
  \***********************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),

/***/ "./node_modules/lodash/_baseFlatten.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseFlatten.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isFlattenable = __webpack_require__(/*! ./_isFlattenable */ "./node_modules/lodash/_isFlattenable.js");

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),

/***/ "./node_modules/lodash/_baseFor.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseFor.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ "./node_modules/lodash/_createBaseFor.js");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ "./node_modules/lodash/_baseGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseHas.js ***!
  \*****************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.has` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHas(object, key) {
  return object != null && hasOwnProperty.call(object, key);
}

module.exports = baseHas;


/***/ }),

/***/ "./node_modules/lodash/_baseHasIn.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseHasIn.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),

/***/ "./node_modules/lodash/_baseIndexOf.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIndexOf.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFindIndex = __webpack_require__(/*! ./_baseFindIndex */ "./node_modules/lodash/_baseFindIndex.js"),
    baseIsNaN = __webpack_require__(/*! ./_baseIsNaN */ "./node_modules/lodash/_baseIsNaN.js"),
    strictIndexOf = __webpack_require__(/*! ./_strictIndexOf */ "./node_modules/lodash/_strictIndexOf.js");

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqual.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsEqual.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ "./node_modules/lodash/_baseIsEqualDeep.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqualDeep.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsEqualDeep.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    equalByTag = __webpack_require__(/*! ./_equalByTag */ "./node_modules/lodash/_equalByTag.js"),
    equalObjects = __webpack_require__(/*! ./_equalObjects */ "./node_modules/lodash/_equalObjects.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseIsMatch.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsMatch.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNaN.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsNaN.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_baseIteratee.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIteratee.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseMatches = __webpack_require__(/*! ./_baseMatches */ "./node_modules/lodash/_baseMatches.js"),
    baseMatchesProperty = __webpack_require__(/*! ./_baseMatchesProperty */ "./node_modules/lodash/_baseMatchesProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    property = __webpack_require__(/*! ./property */ "./node_modules/lodash/property.js");

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseKeysIn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseKeysIn.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn */ "./node_modules/lodash/_nativeKeysIn.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_baseMatches.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseMatches.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsMatch = __webpack_require__(/*! ./_baseIsMatch */ "./node_modules/lodash/_baseIsMatch.js"),
    getMatchData = __webpack_require__(/*! ./_getMatchData */ "./node_modules/lodash/_getMatchData.js"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "./node_modules/lodash/_matchesStrictComparable.js");

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),

/***/ "./node_modules/lodash/_baseMatchesProperty.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash/_baseMatchesProperty.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js"),
    get = __webpack_require__(/*! ./get */ "./node_modules/lodash/get.js"),
    hasIn = __webpack_require__(/*! ./hasIn */ "./node_modules/lodash/hasIn.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "./node_modules/lodash/_isStrictComparable.js"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "./node_modules/lodash/_matchesStrictComparable.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),

/***/ "./node_modules/lodash/_baseMerge.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseMerge.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ "./node_modules/lodash/_assignMergeValue.js"),
    baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/lodash/_baseFor.js"),
    baseMergeDeep = __webpack_require__(/*! ./_baseMergeDeep */ "./node_modules/lodash/_baseMergeDeep.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js"),
    safeGet = __webpack_require__(/*! ./_safeGet */ "./node_modules/lodash/_safeGet.js");

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack);
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;


/***/ }),

/***/ "./node_modules/lodash/_baseMergeDeep.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_baseMergeDeep.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ "./node_modules/lodash/_assignMergeValue.js"),
    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ "./node_modules/lodash/_cloneBuffer.js"),
    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ "./node_modules/lodash/_cloneTypedArray.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/lodash/_copyArray.js"),
    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ "./node_modules/lodash/_initCloneObject.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ "./node_modules/lodash/isArrayLikeObject.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isPlainObject = __webpack_require__(/*! ./isPlainObject */ "./node_modules/lodash/isPlainObject.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js"),
    safeGet = __webpack_require__(/*! ./_safeGet */ "./node_modules/lodash/_safeGet.js"),
    toPlainObject = __webpack_require__(/*! ./toPlainObject */ "./node_modules/lodash/toPlainObject.js");

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;


/***/ }),

/***/ "./node_modules/lodash/_basePickBy.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_basePickBy.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js"),
    baseSet = __webpack_require__(/*! ./_baseSet */ "./node_modules/lodash/_baseSet.js"),
    castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js");

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = baseGet(object, path);

    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}

module.exports = basePickBy;


/***/ }),

/***/ "./node_modules/lodash/_baseProperty.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseProperty.js ***!
  \**********************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),

/***/ "./node_modules/lodash/_basePropertyDeep.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_basePropertyDeep.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseRest.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    overRest = __webpack_require__(/*! ./_overRest */ "./node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__(/*! ./_setToString */ "./node_modules/lodash/_setToString.js");

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),

/***/ "./node_modules/lodash/_baseSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseSet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      return object;
    }

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

module.exports = baseSet;


/***/ }),

/***/ "./node_modules/lodash/_baseSetToString.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseSetToString.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var constant = __webpack_require__(/*! ./constant */ "./node_modules/lodash/constant.js"),
    defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js");

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "./node_modules/lodash/_baseTrim.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseTrim.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var trimmedEndIndex = __webpack_require__(/*! ./_trimmedEndIndex */ "./node_modules/lodash/_trimmedEndIndex.js");

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/lodash/_baseUniq.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseUniq.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SetCache = __webpack_require__(/*! ./_SetCache */ "./node_modules/lodash/_SetCache.js"),
    arrayIncludes = __webpack_require__(/*! ./_arrayIncludes */ "./node_modules/lodash/_arrayIncludes.js"),
    arrayIncludesWith = __webpack_require__(/*! ./_arrayIncludesWith */ "./node_modules/lodash/_arrayIncludesWith.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "./node_modules/lodash/_cacheHas.js"),
    createSet = __webpack_require__(/*! ./_createSet */ "./node_modules/lodash/_createSet.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;


/***/ }),

/***/ "./node_modules/lodash/_cacheHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_cacheHas.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ "./node_modules/lodash/_castPath.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ "./node_modules/lodash/_stringToPath.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ "./node_modules/lodash/_cloneArrayBuffer.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_cloneArrayBuffer.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js");

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ "./node_modules/lodash/_cloneBuffer.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneBuffer.js ***!
  \*********************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;


/***/ }),

/***/ "./node_modules/lodash/_cloneTypedArray.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_cloneTypedArray.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_copyArray.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_copyArray.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ "./node_modules/lodash/_copyObject.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_copyObject.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js");

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/lodash/_createAssigner.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createAssigner.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/lodash/_baseRest.js"),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ "./node_modules/lodash/_isIterateeCall.js");

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),

/***/ "./node_modules/lodash/_createBaseFor.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createBaseFor.js ***!
  \***********************************************/
/***/ ((module) => {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ "./node_modules/lodash/_createSet.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_createSet.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"),
    noop = __webpack_require__(/*! ./noop */ "./node_modules/lodash/noop.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

module.exports = createSet;


/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "./node_modules/lodash/_equalArrays.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_equalArrays.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SetCache = __webpack_require__(/*! ./_SetCache */ "./node_modules/lodash/_SetCache.js"),
    arraySome = __webpack_require__(/*! ./_arraySome */ "./node_modules/lodash/_arraySome.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "./node_modules/lodash/_cacheHas.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),

/***/ "./node_modules/lodash/_equalByTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_equalByTag.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    mapToArray = __webpack_require__(/*! ./_mapToArray */ "./node_modules/lodash/_mapToArray.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),

/***/ "./node_modules/lodash/_equalObjects.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_equalObjects.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/lodash/_getAllKeys.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

module.exports = freeGlobal;


/***/ }),

/***/ "./node_modules/lodash/_getAllKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getAllKeys.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_getAllKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getAllKeysIn.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ "./node_modules/lodash/_getSymbolsIn.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "./node_modules/lodash/_getMatchData.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getMatchData.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "./node_modules/lodash/_isStrictComparable.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash/_getPrototype.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getPrototype.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_getSymbols.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getSymbols.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/lodash/_arrayFilter.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ "./node_modules/lodash/_getSymbolsIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getSymbolsIn.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),

/***/ "./node_modules/lodash/_getTag.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DataView = __webpack_require__(/*! ./_DataView */ "./node_modules/lodash/_DataView.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    Promise = __webpack_require__(/*! ./_Promise */ "./node_modules/lodash/_Promise.js"),
    Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ "./node_modules/lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/lodash/_hasPath.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hasPath.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "./node_modules/lodash/_initCloneObject.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_initCloneObject.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js");

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ "./node_modules/lodash/_isFlattenable.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_isFlattenable.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "./node_modules/lodash/_isIterateeCall.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_isIterateeCall.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),

/***/ "./node_modules/lodash/_isKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "./node_modules/lodash/_isStrictComparable.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash/_isStrictComparable.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/***/ ((module) => {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_mapToArray.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ "./node_modules/lodash/_matchesStrictComparable.js":
/*!*********************************************************!*\
  !*** ./node_modules/lodash/_matchesStrictComparable.js ***!
  \*********************************************************/
/***/ ((module) => {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),

/***/ "./node_modules/lodash/_memoizeCapped.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var memoize = __webpack_require__(/*! ./memoize */ "./node_modules/lodash/memoize.js");

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeKeysIn.js ***!
  \**********************************************/
/***/ ((module) => {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "./node_modules/lodash/_overRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_overRest.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var apply = __webpack_require__(/*! ./_apply */ "./node_modules/lodash/_apply.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_safeGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_safeGet.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

module.exports = safeGet;


/***/ }),

/***/ "./node_modules/lodash/_setCacheAdd.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheAdd.js ***!
  \*********************************************/
/***/ ((module) => {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ "./node_modules/lodash/_setCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheHas.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_setToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_setToArray.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ "./node_modules/lodash/_setToString.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setToString.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseSetToString = __webpack_require__(/*! ./_baseSetToString */ "./node_modules/lodash/_baseSetToString.js"),
    shortOut = __webpack_require__(/*! ./_shortOut */ "./node_modules/lodash/_shortOut.js");

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),

/***/ "./node_modules/lodash/_shortOut.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_shortOut.js ***!
  \******************************************/
/***/ ((module) => {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "./node_modules/lodash/_strictIndexOf.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_strictIndexOf.js ***!
  \***********************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_stringToPath.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ "./node_modules/lodash/_memoizeCapped.js");

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ "./node_modules/lodash/_toKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./node_modules/lodash/_trimmedEndIndex.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_trimmedEndIndex.js ***!
  \*************************************************/
/***/ ((module) => {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),

/***/ "./node_modules/lodash/constant.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/constant.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/***/ ((module) => {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./node_modules/lodash/findIndex.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/findIndex.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFindIndex = __webpack_require__(/*! ./_baseFindIndex */ "./node_modules/lodash/_baseFindIndex.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    toInteger = __webpack_require__(/*! ./toInteger */ "./node_modules/lodash/toInteger.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index);
}

module.exports = findIndex;


/***/ }),

/***/ "./node_modules/lodash/get.js":
/*!************************************!*\
  !*** ./node_modules/lodash/get.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ "./node_modules/lodash/has.js":
/*!************************************!*\
  !*** ./node_modules/lodash/has.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseHas = __webpack_require__(/*! ./_baseHas */ "./node_modules/lodash/_baseHas.js"),
    hasPath = __webpack_require__(/*! ./_hasPath */ "./node_modules/lodash/_hasPath.js");

/**
 * Checks if `path` is a direct property of `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = { 'a': { 'b': 2 } };
 * var other = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.has(object, 'a');
 * // => true
 *
 * _.has(object, 'a.b');
 * // => true
 *
 * _.has(object, ['a', 'b']);
 * // => true
 *
 * _.has(other, 'a');
 * // => false
 */
function has(object, path) {
  return object != null && hasPath(object, path, baseHas);
}

module.exports = has;


/***/ }),

/***/ "./node_modules/lodash/hasIn.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/hasIn.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseHasIn = __webpack_require__(/*! ./_baseHasIn */ "./node_modules/lodash/_baseHasIn.js"),
    hasPath = __webpack_require__(/*! ./_hasPath */ "./node_modules/lodash/_hasPath.js");

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/***/ ((module) => {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "./node_modules/lodash/isArrayLikeObject.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/isArrayLikeObject.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;


/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isPlainObject.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/isPlainObject.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "./node_modules/lodash/isUndefined.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isUndefined.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * Checks if `value` is `undefined`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * _.isUndefined(void 0);
 * // => true
 *
 * _.isUndefined(null);
 * // => false
 */
function isUndefined(value) {
  return value === undefined;
}

module.exports = isUndefined;


/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "./node_modules/lodash/keysIn.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/keysIn.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ "./node_modules/lodash/_baseKeysIn.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ "./node_modules/lodash/memoize.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ "./node_modules/lodash/merge.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/merge.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseMerge = __webpack_require__(/*! ./_baseMerge */ "./node_modules/lodash/_baseMerge.js"),
    createAssigner = __webpack_require__(/*! ./_createAssigner */ "./node_modules/lodash/_createAssigner.js");

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

module.exports = merge;


/***/ }),

/***/ "./node_modules/lodash/noop.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/noop.js ***!
  \*************************************/
/***/ ((module) => {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),

/***/ "./node_modules/lodash/pickBy.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/pickBy.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    basePickBy = __webpack_require__(/*! ./_basePickBy */ "./node_modules/lodash/_basePickBy.js"),
    getAllKeysIn = __webpack_require__(/*! ./_getAllKeysIn */ "./node_modules/lodash/_getAllKeysIn.js");

/**
 * Creates an object composed of the `object` properties `predicate` returns
 * truthy for. The predicate is invoked with two arguments: (value, key).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The source object.
 * @param {Function} [predicate=_.identity] The function invoked per property.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pickBy(object, _.isNumber);
 * // => { 'a': 1, 'c': 3 }
 */
function pickBy(object, predicate) {
  if (object == null) {
    return {};
  }
  var props = arrayMap(getAllKeysIn(object), function(prop) {
    return [prop];
  });
  predicate = baseIteratee(predicate);
  return basePickBy(object, props, function(value, path) {
    return predicate(value, path[0]);
  });
}

module.exports = pickBy;


/***/ }),

/***/ "./node_modules/lodash/property.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/property.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseProperty = __webpack_require__(/*! ./_baseProperty */ "./node_modules/lodash/_baseProperty.js"),
    basePropertyDeep = __webpack_require__(/*! ./_basePropertyDeep */ "./node_modules/lodash/_basePropertyDeep.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),

/***/ "./node_modules/lodash/stubArray.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubArray.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "./node_modules/lodash/toFinite.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toFinite.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),

/***/ "./node_modules/lodash/toInteger.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/toInteger.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toFinite = __webpack_require__(/*! ./toFinite */ "./node_modules/lodash/toFinite.js");

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTrim = __webpack_require__(/*! ./_baseTrim */ "./node_modules/lodash/_baseTrim.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./node_modules/lodash/toPlainObject.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/toPlainObject.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;


/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/lodash/_baseToString.js");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "./node_modules/lodash/union.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/union.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFlatten = __webpack_require__(/*! ./_baseFlatten */ "./node_modules/lodash/_baseFlatten.js"),
    baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/lodash/_baseRest.js"),
    baseUniq = __webpack_require__(/*! ./_baseUniq */ "./node_modules/lodash/_baseUniq.js"),
    isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ "./node_modules/lodash/isArrayLikeObject.js");

/**
 * Creates an array of unique values, in order, from all given arrays using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of combined values.
 * @example
 *
 * _.union([2], [1, 2]);
 * // => [2, 1]
 */
var union = baseRest(function(arrays) {
  return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
});

module.exports = union;


/***/ }),

/***/ "./src/blocks/star-rating/styles/editor.scss":
/*!***************************************************!*\
  !*** ./src/blocks/star-rating/styles/editor.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/star-rating/styles/style.scss":
/*!**************************************************!*\
  !*** ./src/blocks/star-rating/styles/style.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/blocks/star-rating/block.json":
/*!*******************************************!*\
  !*** ./src/blocks/star-rating/block.json ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"gutentools/star-rating","version":"1.0.0","title":"Star Rating","category":"gutentools","description":"Add interactive star ratings to your site with the Star Rating Block. Perfect for showcasing reviews or feedback, this block allows users to rate content easily.","keywords":["rating","star"],"example":{},"supports":{"html":false},"attributes":{"block_id":{"type":"string"},"alignment":{"type":"string","default":"center"},"rating":{"type":"number","default":5},"background":{"type":"string"},"border":{"type":"object","default":{"color":"","style":"","width":"0"}},"borderRadius":{"type":"object","default":{"activeUnit":"px","responsiveViews":["desktop","tablet","mobile"],"units":["px","em"],"range":{"min":0,"max":100},"values":{"desktop":0,"tablet":0,"mobile":0}}},"iconSize":{"type":"object","default":{"activeUnit":"px","responsiveViews":["desktop","tablet","mobile"],"units":["px","em"],"range":{"min":0,"max":100},"values":{"desktop":18,"tablet":18,"mobile":18}}},"ratingPadding":{"type":"object","default":{"activeUnit":"px","isLinkActive":true,"properties":["top","right","bottom","left"],"responsiveViews":["desktop","tablet","mobile"],"units":["px","rem"],"values":{"desktop":[0,0,0,0],"tablet":[0,0,0,0],"mobile":[0,0,0,0]}}},"ratingMargin":{"type":"object","default":{"activeUnit":"px","isLinkActive":true,"properties":["top","right","bottom","left"],"responsiveViews":["desktop","tablet","mobile"],"units":["px","rem"],"values":{"desktop":[0,0,0,0],"tablet":[0,0,0,0],"mobile":[0,0,0,0]}}},"iconColor":{"type":"string","default":"#ff8e07"}},"textdomain":"gutentools","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"blocks/star-rating/index": 0,
/******/ 			"blocks/star-rating/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkgutentools"] = globalThis["webpackChunkgutentools"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/star-rating/style-index"], () => (__webpack_require__("./src/blocks/star-rating/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map