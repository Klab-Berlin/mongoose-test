import mongoose from 'mongoose';

/**
 * @template {mongoose.SchemaDefinition} T
 * @param {T} schemaBody
 * @param {mongoose.SchemaOptions} [options = {}]
 * @returns {import('./schema').Schema<T>}
 */
function schema(schemaBody, options = {}) {
  // @ts-ignore
  return new mongoose.Schema(schemaBody, options);
}

export default schema;
