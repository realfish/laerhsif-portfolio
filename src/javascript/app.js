let doc = document;

// Misc
import _misc from './_misc';
_misc();

// Class



// View
// import viewHttp404 from './view/http404';
// import viewIndex   from './view/index';
import viewSet     from './view/set';

// View router
let view = doc.querySelector('body').classList[0];

switch (view) {
	// case 'http404': {
	// 	viewHttp404();
	// 	break;
	// }
	// case 'index': {
	// 	viewIndex();
	// 	break;
	// }
	case 'set': {
		viewSet();
		break;
	}
}

