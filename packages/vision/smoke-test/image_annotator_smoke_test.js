/*
 * Copyright 2017, Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

describe('ImageAnnotatorSmokeTest', function() {

  it('successfully makes a call to the service', function(done) {
    var vision = require('../src');

    var client = vision.v1({
      // optional auth parameters.
    });

    var gcsImageUri = 'gs://gapic-toolkit/President_Barack_Obama.jpg';
    var source = {
        gcsImageUri : gcsImageUri
    };
    var image = {
        source : source
    };
    var type = vision.v1.types.Feature.Type.FACE_DETECTION;
    var featuresElement = {
        type : type
    };
    var features = [featuresElement];
    var requestsElement = {
        image : image,
        features : features
    };
    var requests = [requestsElement];
    client.batchAnnotateImages({requests: requests}).then(function(responses) {
        var response = responses[0];
        console.log(response);
    })
    .then(done)
    .catch(done);
  });
});