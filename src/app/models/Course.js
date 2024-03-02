const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    name: { type: String, required: true},
    description: { type: String, maxLegth: 600},
    image: { type: String },
    videoId: { type: String, maxLegth: 255},
    level: { type: String },
    slug: { type: String, slug: 'name', unique: true },
}, {
    timestamps: true,
});

// Custom query helpers
CourseSchema.query.sortable = function(req) {
    if(req.query.hasOwnProperty('_sort')) {
        const isValidtype = ['asc', 'desc'].includes(req.query.type);
        return this.sort({
            [req.query.column]: isValidtype ? req.query.type: 'desc',
        });
    }
    return this;
}

//Add plugins
mongoose.plugin(slug);
CourseSchema.plugin(mongooseDelete, { 
        overrideMethods: 'all',
        deletedAt : true, 
    });

module.exports = mongoose.model('Course', CourseSchema);
