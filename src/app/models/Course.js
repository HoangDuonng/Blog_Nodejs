const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, required: true},
    description: { type: String, maxLegth: 600},
    image: { type: String },
    videoId: { type: String, maxLegth: 255},
    level: { type: String },
    slug: { type: String, slug: 'name', unique: true },
}, {
    timestamps: true,
});

//Add plugins
mongoose.plugin(slug);
Course.plugin(mongooseDelete, { 
        overrideMethods: 'all',
        deletedAt : true, 
    });

module.exports = mongoose.model('Course', Course);
